import { AbortError, BaseError } from '../errors/model';
import { ApiFetchResponse } from '@jeius-portfolio/types/api';

/**
 * Extracts the `data` property from an API response, while also handling errors.
 *
 * @throws `AbortError` If the response status is 499, indicating a client-initiated cancellation.
 * @throws `Error` For any other non-OK response, with the error message and details from the response.
 * @returns The `data` property from the API response if the response is OK.
 */
export async function extractDataFromResponse<T>(response: Response): Promise<T> {
  const responseData: ApiFetchResponse<T> = await response.json();

  if (!response.ok || 'error' in responseData) {
    if (response.status === 499) {
      throw new AbortError(responseData.message);
    }

    throw new BaseError(responseData.message, {
      statusCode: response.status,
      statusText: response.statusText,
      cause: {
        body: responseData,
      },
    });
  }

  return responseData.data;
}
