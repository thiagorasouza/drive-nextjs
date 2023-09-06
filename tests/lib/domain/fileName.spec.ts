import { FileName } from "@/lib/domain/fileName";
// import { Sanitizer } from "@/lib/domain/protocols/sanitizer";

// const makeSanitizerMock = (): Sanitizer => {
//   class SanitizerMock implements Sanitizer {
//     sanitize(value: string): string {
//       return "abc123";
//     }
//   }

//   return new SanitizerMock();
// };

describe("FileName Value Object Test Suite", () => {
  describe("isValid()", () => {
    it("should return false if fileName does not contain any alphanumeric chars", () => {
      const fileName = "___";
      const result = FileName.isValid(fileName);

      expect(result).toBe(false);
    });
  });
});
