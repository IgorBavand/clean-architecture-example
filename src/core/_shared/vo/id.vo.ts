import { inspect } from 'util';
import { ValueObject } from '../value-object';

export abstract class Id<T = any> implements ValueObject {
  #value: T;

  get value() {
    return this.#value;
  }

  protected constructor(value: T) {
    this.#value = value;
  }

  toJSON() {
    return this.#value;
  }
  equals(other: Id): boolean {
    return other instanceof Id && other.#value === this.#value;
  }
  [inspect.custom](depth: any, options: any) {
    return options.stylize(
      `${this.constructor.name}(${this.value})`,
      'special',
    );
  }
}
