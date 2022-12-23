import { randomUUID } from 'crypto';
import { ValidationError } from '../errors/validation-error';
import { Id } from './id.vo';

export class UUID4 extends Id<string> {
  static of(id: string) {
    if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        id,
      )
    ) {
      throw new ValidationError('O ID precisa ser um UUID4');
    }
    return new UUID4(id);
  }

  static generate() {
    return new UUID4(randomUUID());
  }
}
