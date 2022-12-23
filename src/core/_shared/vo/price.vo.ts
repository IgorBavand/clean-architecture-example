import { inspect } from 'util';
import { ValidationError } from '../errors/validation-error';
import { ValueObject } from '../value-object';

export class Price implements ValueObject {
  protected constructor(value: number) {
    this.#value = value;
  }

  static of(value: number) {
    if (value < 0) {
      throw new ValidationError('O preço deve ser maior que zero (0)!');
    }

    return new Price(value);
  }

  #value: number;

  get value() {
    return this.#value;
  }

  toJSON() {
    return this.#value;
  }
  equals(other: Price): boolean {
    return other instanceof Price && this.#value === other.value;
  }

  [inspect.custom](depth: any, options: any) {
    return options.stylize(
      `${this.constructor.name}(${this.value})`,
      'special',
    );
  }
}
