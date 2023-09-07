import * as uuid from "uuid";
import { Identifier } from "../domain/protocols/identifier";

export class UUIDAdapter implements Identifier {
  generateRandomId(): string {
    return uuid.v4();
  }

  isIdValid(id: string): boolean {
    return uuid.validate(id);
  }
}
