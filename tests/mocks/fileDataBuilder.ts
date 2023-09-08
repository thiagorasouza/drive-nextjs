import crypto from "node:crypto";
import { faker } from "@faker-js/faker";
import { FileInput } from "@/lib/domain";

export class FileDataBuilder {
  private DEFAULT_FILESIZE = 1024 * 1024; // 1 MB

  private file: any;

  private constructor() {
    this.file = {};
  }

  public data(data?: Buffer) {
    this.file["fileData"] = data ?? crypto.randomBytes(this.DEFAULT_FILESIZE);
    return this;
  }

  public size(size?: number) {
    this.file["fileSize"] = size ?? this.DEFAULT_FILESIZE;
    return this;
  }

  public name(name?: string) {
    this.file["fileName"] =
      name || faker.system.fileName({ extensionCount: 0 });
    return this;
  }

  public path(path?: string) {
    if (!path) {
      const fullPath = faker.system.filePath();
      const onlyDirPath = fullPath.slice(0, fullPath.lastIndexOf("/"));
      this.file["filePath"] = onlyDirPath;
    } else {
      this.file["filePath"] = path;
    }

    return this;
  }

  public ext(ext?: string) {
    this.file["fileExt"] = ext ?? faker.system.fileExt();
    return this;
  }

  public owner(owner?: string) {
    this.file["fileOwner"] = owner ?? faker.string.uuid();
    return this;
  }

  public null(fieldName: string) {
    this.file[fieldName] = null;
    return this;
  }

  public buildInput(): FileInput {
    return this.file;
  }

  public static file(): FileDataBuilder {
    return new FileDataBuilder().data().size().name().path().ext().owner();
  }
}
