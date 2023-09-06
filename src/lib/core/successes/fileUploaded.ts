import { Success } from "../success";

export class FileUploaded extends Success<string> {
  constructor() {
    super("File uploaded");
  }
}
