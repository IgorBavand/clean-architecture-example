import { DomainError } from '../domain-error';

export class EntityNotFoundError extends DomainError {
  name = 'EntityNotFoundError';

  constructor(readonly entityName: string) {
    super(entityName + ' not found', 404);
  }
}
