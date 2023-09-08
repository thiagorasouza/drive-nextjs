import { Success } from "../core/success";
import { Identifier } from "./protocols/identifier";

export class FileId {
  private readonly _value: string;

  private constructor(id: string) {
    this._value = id;
  }

  public get value(): string {
    return this._value;
  }

  public static create(identifier: Identifier): Success<FileId> {
    const randomId = identifier.generateRandomId();
    return new Success<FileId>(new FileId(randomId));
  }

  public static from(id: string): Success<FileId> {
    return new Success<FileId>(new FileId(id));
  }
}
