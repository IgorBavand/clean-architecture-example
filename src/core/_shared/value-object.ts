export interface ValueObject {
  toJSON(): any;
  equals(other: ValueObject): boolean;
}
