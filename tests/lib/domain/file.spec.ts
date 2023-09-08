import { File, FileInput } from "@/lib/domain";
import { FileDataBuilder } from "../../mocks/fileDataBuilder";
import { mockIdentifier } from "../../mocks/identifier.mock";
import { mockSanitizer } from "../../mocks/sanitizer.mock";
import { mockValidator } from "../../mocks/validator.mock";
import { Success } from "@/lib/core/success";
import { mockServerConfig } from "../../mocks/serverConfig.mock";

const makeSutWrapper = () => {
  const identifierStub = mockIdentifier();
  const sanitizerStub = mockSanitizer();
  const validatorStub = mockValidator();

  return (fileInput: FileInput) =>
    File.create(
      fileInput,
      identifierStub,
      sanitizerStub,
      validatorStub,
      mockServerConfig,
    );
};

describe("File Entity Test Suite", () => {
  it("should return a File instance if input is valid", async () => {
    const sutWrapper = makeSutWrapper();

    const fileInput = FileDataBuilder.file()
      .ext(mockServerConfig.allowedExts[0])
      .size(mockServerConfig.maxFileSize - 1000)
      .buildInput();

    const result = sutWrapper(fileInput) as Success<File>;
    console.log("🚀 ~ result:", result);

    expect(result.ok).toBe(true);
    expect(result.value).toBeInstanceOf(File);
  });
});
