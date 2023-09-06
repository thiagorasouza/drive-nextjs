import { FilenamifyAdapter } from "@/lib/adapters/filenamifyAdapter";

const makeSut = (): FilenamifyAdapter => {
  return new FilenamifyAdapter();
};

describe("FilenamifyAdapter Test Suite", () => {
  it("should replace invalid characters with an underscore", () => {
    const sut = makeSut();

    const invalidChars = '<>:"/\\|?*'.split("");

    for (const char of invalidChars) {
      const result = sut.sanitize(`ab-${char}-cd`);
      expect(result).toBe("ab-_-cd");
    }
  });

  it("should return my_filename if my:filename is provided", () => {
    const sut = makeSut();

    const result = sut.sanitize(`my:filename`);
    expect(result).toBe("my_filename");
  });

  it("should return ___ if ::: is provided", () => {
    const sut = makeSut();

    const result = sut.sanitize(`my:filename`);
    expect(result).toBe("my_filename");
  });
});
