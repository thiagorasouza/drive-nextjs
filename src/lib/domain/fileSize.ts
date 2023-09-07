import { InvalidParam } from "../core/failures/invalidParam";
import { Success } from "../core/success";

interface ServerConfig {
  maxFileSize: number;
}

export class FileSize {
  private readonly _value: number;

  private constructor(fileSize: number) {
    this._value = fileSize;
  }

  public get value(): number {
    return this._value;
  }

  public static create(
    fileSize: number,
    serverConfig: ServerConfig,
  ): InvalidParam | Success<FileSize> {
    if (fileSize > serverConfig.maxFileSize) {
      return new InvalidParam("fileSize");
    }

    return new Success<FileSize>(new FileSize(fileSize));
  }
}
