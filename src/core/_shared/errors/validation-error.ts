import { DomainError } from '../domain-error';

export class ValidationError extends DomainError {
  name = 'ValidationError';

  constructor(readonly message: string, readonly cause?: any) {
    super(message, 422, cause);
  }
}
