import { InvalidParam } from "../core/failures/invalidParam";
import { Success } from "../core/success";
import { Sanitizer } from "./protocols/sanitizer";

export class FileName {
  private readonly _value: string;

  private constructor(fileName: string) {
    this._value = fileName;
  }

  public get value(): string {
    return this._value;
  }

  public static isValid(fileName: string): boolean {
    // Has one or more alphanumeric characters after sanitizing
    return !!fileName.match(/[\p{Letter}\p{Mark}0-9]+/u);
  }

  public static create(
    fileName: string,
    sanitizer: Sanitizer,
  ): InvalidParam | Success<FileName> {
    const sanitizedFileName = sanitizer.sanitize(fileName);

    if (!FileName.isValid(sanitizedFileName)) {
      return new InvalidParam("fileName");
    }

    return new Success<FileName>(new FileName(sanitizedFileName));
  }

  public static from(name: string): Success<FileName> {
    return new Success<FileName>(new FileName(name));
  }
}
