import { Id } from "./vo/id.vo";
import { UUID4 } from "./vo/uuid4.vo";

export interface EntityFields {
  id?: Id;
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class Entity<T extends EntityFields = any> {
  id: Id;
  createdAt: Date;
  updatedAt: Date;

  protected constructor(data: T) {
    data.id ??= UUID4.generate();
    data.createdAt ??= new Date();
    data.updatedAt ??= new Date();

    Object.assign(this, data);
  }

  assign(data: Partial<this>) {
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined) {
        this[key as keyof this] = value;
      }
    }
    return this;
  }
}
