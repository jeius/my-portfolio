import type { GetPreference, UpdatePreference } from '@jeius-portfolio/types';
import type { ApiFetchResponse } from '@jeius-portfolio/types/api';
import { mergeHeaders } from '@jeius-portfolio/utilities';
import { PayloadSDK as Payload } from '@payloadcms/sdk';
import { PayloadTypesShape, UntypedPayloadTypes } from 'payload';
import { stringify } from 'qs-esm';

export class PayloadSDK<T extends PayloadTypesShape = UntypedPayloadTypes> extends Payload<T> {
  private headers: Headers = new Headers();

  //#region Utility Methods -----------------------------------------------

  /**
   * A wrapper around the fetch method to handle common logic like error handling
   * and query string construction. This is used internally by the SDK methods to
   * ensure consistent behavior across all API calls.
   */
  private _fetch = async <TData>(
    path: string,
    init?: Omit<RequestInit, 'body'> & {
      searchParams?: Record<string, unknown>;
      body?: Record<string, unknown>;
    }
  ): Promise<TData> => {
    const { searchParams, body, ...restOptions } = init || {};

    const queryString = searchParams && stringify(searchParams, { addQueryPrefix: true });

    const url = this.baseURL + (queryString ? path.trim() + queryString : path.trim());

    const response = await this.fetch(url, {
      ...restOptions,
      body: body && JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API request failed: ${response.statusText}`, {
        cause: {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        },
      });
    }

    return response.json() as Promise<TData>;
  };

  updateHeaders = (headers: Headers) => {
    this.headers = mergeHeaders(this.headers, headers);
  };

  setHeaders = (headers: Headers) => {
    this.headers = headers;
  };

  setAuthHeaders = (token: string | null) => {
    if (!token) {
      this.headers.delete('Authorization');
    }
    this.headers.set('Authorization', `Bearer ${token}`);
  };

  getHeaders = () => {
    return this.headers;
  };

  //#endregion --------------------------------------------------------------

  //#region API Operations -------------------------------------------------------

  apiFetch = async <TData>(
    path: string,
    init?: Omit<RequestInit, 'body'> & {
      searchParams?: Record<string, unknown>;
      body?: Record<string, unknown>;
    }
  ): Promise<TData> => {
    const result = await this._fetch<ApiFetchResponse<TData>>(path, init);

    if ('error' in result) {
      throw new Error(result.message, { cause: result.error });
    }

    return result.data;
  };

  getPreference = async <TValue = unknown>(key: string) => {
    const endpoint = `/payload-preferences/${key}`;
    const response = await this.request({ path: endpoint, method: 'GET' });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to get preference: ${response.statusText}`, {
        cause: {
          status: response.status,
          statusText: response.statusText,
          body: errorData,
        },
      });
    }

    const result = (await response.json()) as GetPreference<TValue>;
    return result.value;
  };

  updatePreference = async <TValue = unknown>(key: string, value: TValue) => {
    const endpoint = `/payload-preferences/${key}`;
    const response = await this.request({ path: endpoint, method: 'POST', json: { value } });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to update preference: ${response.statusText}`, {
        cause: {
          status: response.status,
          statusText: response.statusText,
          body: errorData,
        },
      });
    }

    const result = (await response.json()) as UpdatePreference<TValue>;
    return result?.doc.value;
  };

  //#endregion ----------------------------------------------------------------------
}
