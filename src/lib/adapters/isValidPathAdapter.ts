import isInvalidPath from "is-invalid-path";

export class isValidPathAdapter implements Validator {
  isValid(filePath: string): boolean {
    return !isInvalidPath(filePath, { windows: true });
  }
}
