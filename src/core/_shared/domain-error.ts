export class DomainError extends Error {
  name = 'DomainError';
  constructor(
    readonly message: string,
    readonly status: number,
    readonly cause?: any,
  ) {
    super(message);
  }
}
