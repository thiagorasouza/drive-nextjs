import { Success, Failure } from "@/lib/core";
import { FileProps } from "@/lib/domain";
import { UploadFileRepository } from "@/lib/usecases/uploadFileRepository";
import { SupabaseClient } from "@supabase/supabase-js";

export class SupabaseFileRepository implements UploadFileRepository {
  constructor(
    public readonly client: SupabaseClient,
    public readonly bucket: string,
  ) {}

  async upload(fileProps: FileProps): Promise<Success<null> | Failure<string>> {
    const fullFilePath = `${fileProps.filePath.value}/${fileProps.fileName.value}.${fileProps.fileExt.value}`;
    const result = await this.client.storage
      .from(this.bucket)
      .upload(fullFilePath, fileProps.fileData);
    console.log("🚀 ~ result:", result);

    return new Success(null);
  }
}
