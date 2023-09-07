import { Validator } from "@/lib/domain/protocols";

export const mockValidator = (): Validator => {
  class ValidatorStub implements Validator {
    isValid(value: string): boolean {
      return true;
    }
  }

  return new ValidatorStub();
};
