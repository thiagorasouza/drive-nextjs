import { FileExt, FileId, FileName, FileOwner, FilePath, FileSize } from ".";
import { InvalidParam } from "../core/failures/invalidParam";
import { Success } from "../core/success";
import { Identifier, Sanitizer, ServerConfig, Validator } from "./protocols";

export interface FileProps {
  fileId: FileId;
  fileData: Buffer;
  fileName: FileName;
  filePath: FilePath;
  fileSize: FileSize;
  fileExt: FileExt;
  fileOwner: FileOwner;
}

export interface FileInput {
  fileData: Buffer;
  fileName: string;
  filePath: string;
  fileSize: number;
  fileExt: string;
  fileOwner: string;
}

export class File {
  private constructor(public readonly props: FileProps) {}

  public static create(
    fileInput: FileInput,
    identifier: Identifier,
    sanitizer: Sanitizer,
    validator: Validator,
    serverConfig: ServerConfig,
  ): InvalidParam | Success<File> {
    const fileIdResult = FileId.create(identifier);

    const fileNameResult = FileName.create(fileInput.fileName, sanitizer);
    if (!fileNameResult.ok) {
      return fileNameResult;
    }

    const filePathResult = FilePath.create(fileInput.filePath, validator);
    if (!filePathResult.ok) {
      return filePathResult;
    }

    const fileSizeResult = FileSize.create(fileInput.fileSize, serverConfig);
    if (!fileSizeResult.ok) {
      return fileSizeResult;
    }

    const fileExtResult = FileExt.create(fileInput.fileExt, serverConfig);
    if (!fileExtResult.ok) {
      return fileExtResult;
    }

    const fileOwnerResult = FileOwner.create(fileInput.fileOwner, identifier);
    if (!fileOwnerResult.ok) {
      return fileOwnerResult;
    }

    const file = new File({
      fileId: fileIdResult.value,
      fileData: fileInput.fileData,
      fileName: fileNameResult.value,
      filePath: filePathResult.value,
      fileSize: fileSizeResult.value,
      fileExt: fileExtResult.value,
      fileOwner: fileOwnerResult.value,
    });

    return new Success<File>(file);
  }
}
