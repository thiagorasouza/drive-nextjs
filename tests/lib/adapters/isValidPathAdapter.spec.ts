import { isValidPathAdapter } from "@/lib/adapters/isValidPathAdapter";

describe("isValidPathAdapter Test Suite", () => {
  it("should return false for invalid file paths", () => {
    const sut = new isValidPathAdapter();

    const invalidPath = '/invalid/"/path';
    const result = sut.isValid(invalidPath);

    expect(result).toBe(false);
  });

  it("should return true for vali file paths", () => {
    const sut = new isValidPathAdapter();

    const invalidPath = "/valid/path";
    const result = sut.isValid(invalidPath);

    expect(result).toBe(true);
  });
});
