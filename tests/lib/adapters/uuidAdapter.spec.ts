import { UUIDAdapter } from "@/lib/adapters/uuidAdapter";

describe("uuidAdapter Test Suite", () => {
  describe("generateRandomId()", () => {
    it("should generate a valid random id", () => {
      const sut = new UUIDAdapter();

      const result = sut.isIdValid(sut.generateRandomId());

      expect(result).toBe(true);
    });
  });

  describe("isIdValid()", () => {
    it("should return false for invalid ids", () => {
      const sut = new UUIDAdapter();

      const result = sut.isIdValid("123-456");

      expect(result).toBe(false);
    });
  });
});
