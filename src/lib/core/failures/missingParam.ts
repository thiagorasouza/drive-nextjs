import { Failure } from "@/lib/core/failure";

export class MissingParam extends Failure<string> {
  constructor(paramName: string) {
    super(`Missing ${paramName}`);
  }
}
