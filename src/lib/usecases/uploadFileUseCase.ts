import { FileUploaded, Guard, MissingParam } from "../core";
import { File } from "../domain";
import {
  Identifier,
  Sanitizer,
  ServerConfig,
  Validator,
} from "../domain/protocols";
import { UploadFileRepository } from "./uploadFileRepository";

export interface RequestModel {
  fileData: Buffer;
  fileName: string;
  filePath: string;
  fileSize: number;
  fileExt: string;
  fileOwner: string;
}

export type ResponseModel = FileUploaded | MissingParam;

export class UploadFileUseCase {
  private requiredFields = [
    "fileData",
    "fileName",
    "filePath",
    "fileSize",
    "fileExt",
    "fileOwner",
  ];

  constructor(
    public readonly repository: UploadFileRepository,
    public readonly identifier: Identifier,
    public readonly sanitizer: Sanitizer,
    public readonly validator: Validator,
    public readonly serverConfig: ServerConfig,
  ) {}

  async execute(request: RequestModel): Promise<ResponseModel> {
    const guardResult = Guard.againstNullOrUndefined(
      request,
      this.requiredFields,
    );
    if (!guardResult.ok) {
      return guardResult;
    }

    const fileResult = File.create(
      request,
      this.identifier,
      this.sanitizer,
      this.validator,
      this.serverConfig,
    );
    if (!fileResult.ok) {
      return fileResult;
    }

    const fileProps = fileResult.value.props;

    const uploadResult = await this.repository.upload(fileProps);
    if (!uploadResult.ok) {
      return uploadResult;
    }

    return new FileUploaded();
  }
}
