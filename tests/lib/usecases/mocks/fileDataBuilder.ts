import { RequestModel } from "@/lib/usecases/uploadFile";
import crypto from "node:crypto";
import { faker } from "@faker-js/faker";

export class FileDataBuilder {
  private DEFAULT_FILESIZE = 1024 * 1024; // 1 MB

  private file: any;

  private constructor() {
    this.file = {} as RequestModel;
  }

  public withFileDataAndSize() {
    this.file["fileData"] = crypto.randomBytes(this.DEFAULT_FILESIZE);
    this.file["fileSize"] = this.DEFAULT_FILESIZE;
    return this;
  }

  public withFileName() {
    this.file["fileName"] = faker.system.fileName({ extensionCount: 0 });
    return this;
  }

  public withFilePath() {
    const fullPath = faker.system.filePath();
    const onlyDirPath = fullPath.slice(0, fullPath.lastIndexOf("/"));
    this.file["filePath"] = onlyDirPath;
    return this;
  }

  public withFileExt() {
    this.file["fileExt"] = faker.system.fileExt();
    return this;
  }

  public withOwner() {
    this.file["owner"] = faker.string.uuid();
    return this;
  }

  public withNull(fieldName: string) {
    this.file[fieldName] = null;
    return this;
  }

  public build(): RequestModel {
    return this.file;
  }

  public static file(): FileDataBuilder {
    return new FileDataBuilder()
      .withFileDataAndSize()
      .withFileName()
      .withFilePath()
      .withFileExt()
      .withOwner();
  }
}
