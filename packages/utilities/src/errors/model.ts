interface ErrorOptions {
  cause?: unknown;
  name?: string;
  statusCode?: number;
  statusText?: string;
}

export class BaseError extends Error {
  statusCode?: number;
  statusText?: string;

  constructor(message: string, options?: ErrorOptions) {
    super(message);
    this.name = options?.name || 'unknown_error';
    this.cause = options?.cause;
    this.statusCode = options?.statusCode || 500;
    this.statusText = options?.statusText || 'Internal Server Error';

    // Ensure the prototype chain is maintained
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

export class AbortError extends BaseError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, {
      ...options,
      name: 'AbortError',
      statusCode: 499,
      statusText: 'Client Closed Request',
    });
    Object.setPrototypeOf(this, AbortError.prototype);
  }
}

export class PostError<T> extends BaseError {
  data: T | null | undefined;

  constructor(
    message: string,
    { data, ...options }: ErrorOptions & { data?: T | null | undefined } = {}
  ) {
    super(message, { ...options, name: 'PostError' });
    this.data = data;
    Object.setPrototypeOf(this, PostError.prototype);
  }
}
