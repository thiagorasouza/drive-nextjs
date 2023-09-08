import { InvalidParam } from "../core/failures/invalidParam";
import { Success } from "../core/success";
import { ServerConfig } from "./protocols";

export class FileExt {
  private readonly _value: string;

  private constructor(fileExt: string) {
    this._value = fileExt;
  }

  public get value(): string {
    return this._value;
  }

  public static create(
    fileExt: string,
    serverConfig: ServerConfig,
  ): InvalidParam | Success<FileExt> {
    if (!serverConfig.allowedExts.includes(fileExt)) {
      return new InvalidParam("fileExt");
    }

    return new Success<FileExt>(new FileExt(fileExt));
  }

  public static from(ext: string): Success<FileExt> {
    return new Success<FileExt>(new FileExt(ext));
  }
}
