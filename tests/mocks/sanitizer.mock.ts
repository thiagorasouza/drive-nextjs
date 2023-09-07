import { Sanitizer } from "@/lib/domain/protocols";

export const mockSanitizer = (): Sanitizer => {
  class SanitizerStub implements Sanitizer {
    sanitize(value: string): string {
      return "sanitized_value";
    }
  }

  return new SanitizerStub();
};
