import { Failure } from "../failure";

export class InvalidParam extends Failure<string> {
  constructor(paramName: string) {
    super(`Invalid ${paramName}`);
  }
}
