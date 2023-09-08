import { InvalidParam } from "../core/failures/invalidParam";
import { Success } from "../core/success";
import { Validator } from "./protocols";

export class FilePath {
  private readonly _value: string;

  private constructor(filePath: string) {
    this._value = filePath;
  }

  public get value(): string {
    return this._value;
  }

  public static create(
    filePath: string,
    validator: Validator,
  ): InvalidParam | Success<FilePath> {
    if (!validator.isValid(filePath)) {
      return new InvalidParam("filePath");
    }

    return new Success<FilePath>(new FilePath(filePath));
  }

  public static from(path: string): Success<FilePath> {
    return new Success<FilePath>(new FilePath(path));
  }
}
