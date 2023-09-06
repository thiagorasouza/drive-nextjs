import { Success } from "./success";
import { MissingParam } from "./failures/missingParam";

export class Guard {
  public static againstNullOrUndefined(
    input: any,
    requiredFields: string[],
  ): Success<string> | MissingParam {
    for (const field of requiredFields) {
      if (input[field] === null || input[field] === undefined) {
        return new MissingParam(field);
      }
    }

    return new Success<string>("All fields are present");
  }
}
