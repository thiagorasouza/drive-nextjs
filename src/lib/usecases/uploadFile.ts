import { MissingParam } from "../core/failures/missingParam";
import { FileUploaded } from "../core/successes/fileUploaded";
import { Guard } from "../core/guard";

export interface RequestModel {
  fileData: Buffer;
  fileName: string;
  filePath: string;
  fileSize: number;
  fileExt: string;
  fileOwner: string;
}

export type ResponseModel = FileUploaded | MissingParam;

export class UploadFile {
  private requiredFields = [
    "fileData",
    "fileName",
    "filePath",
    "fileSize",
    "fileExt",
    "owner",
  ];

  async execute(request: RequestModel): Promise<ResponseModel> {
    const guardResult = Guard.againstNullOrUndefined(
      request,
      this.requiredFields,
    );
    if (!guardResult.ok) {
      return guardResult;
    }

    const {
      fileData,
      fileName,
      filePath,
      fileSize,
      fileExt,
      fileOwner: owner,
    } = request;

    return new FileUploaded();
  }
}
