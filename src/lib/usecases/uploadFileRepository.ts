import { Failure } from "../core/failure";
import { Success } from "../core/success";
import { FileProps } from "../domain";

export interface UploadFileRepository {
  upload(fileProps: FileProps): Promise<Success<null> | Failure<string>>;
}
