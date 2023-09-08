import { Success, Failure } from "@/lib/core";
import { FileProps } from "@/lib/domain";
import { UploadFileRepository } from "@/lib/usecases/uploadFileRepository";

export const mockUploadFileRepository = (): UploadFileRepository => {
  class UploadFileRepositoryStub implements UploadFileRepository {
    async upload(
      fileProps: FileProps,
    ): Promise<Success<null> | Failure<string>> {
      return new Success(null);
    }
  }

  return new UploadFileRepositoryStub();
};
