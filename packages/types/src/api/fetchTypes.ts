export type ApiFetchResponse<T> =
  | {
      message: string;
      data: T;
      status?: number;
    }
  | {
      message: string;
      error: unknown;
      status?: number;
    };

export type ApiMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

