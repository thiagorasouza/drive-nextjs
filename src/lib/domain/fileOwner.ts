import { InvalidParam } from "../core/failures/invalidParam";
import { Success } from "../core/success";
import { Identifier } from "./protocols/identifier";

export class FileOwner {
  private readonly _value: string;

  private constructor(id: string) {
    this._value = id;
  }

  public get value(): string {
    return this._value;
  }

  public static create(
    userId: string,
    identifier: Identifier,
  ): Success<FileOwner> | InvalidParam {
    if (!identifier.isIdValid(userId)) {
      return new InvalidParam("fileOwner");
    }

    return new Success<FileOwner>(new FileOwner(userId));
  }
}
