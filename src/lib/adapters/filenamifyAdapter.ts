import filenamify from "filenamify";
import { Sanitizer } from "../domain/protocols";

export class FilenamifyAdapter implements Sanitizer {
  constructor(public readonly replacement = "_") {}

  sanitize(value: string): string {
    return filenamify(value, { replacement: this.replacement });
  }
}
