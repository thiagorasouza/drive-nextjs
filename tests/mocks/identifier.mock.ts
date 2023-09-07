import { Identifier } from "@/lib/domain/protocols";

export const mockIdentifier = (): Identifier => {
  class IdentifierStub implements Identifier {
    generateRandomId(): string {
      return "random_id";
    }

    isIdValid(value: string): boolean {
      return true;
    }
  }

  return new IdentifierStub();
};
