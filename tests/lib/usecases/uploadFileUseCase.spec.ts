import { UploadFileUseCase } from "@/lib/usecases/uploadFileUseCase";
import { MissingParam } from "@/lib/core/failures/missingParam";
import { FileUploaded } from "@/lib/core/successes/fileUploaded";
import {
  FileDataBuilder,
  mockIdentifier,
  mockSanitizer,
  mockServerConfig,
  mockValidator,
} from "../../mocks";
import { mockUploadFileRepository } from "../../mocks/uploadFileReposity.mock";

const makeSut = () => {
  const identifierStub = mockIdentifier();
  const sanitizerStub = mockSanitizer();
  const validatorStub = mockValidator();
  const uploadFileRepositoryStub = mockUploadFileRepository();
  return new UploadFileUseCase(
    uploadFileRepositoryStub,
    identifierStub,
    sanitizerStub,
    validatorStub,
    mockServerConfig,
  );
};

describe("UploadFile Usecase Test Suite", () => {
  it("should return MissingParam if any required field is missing", async () => {
    const sut = makeSut();

    const requiredFields = [
      "fileData",
      "fileName",
      "filePath",
      "fileSize",
      "fileExt",
      "fileOwner",
    ];

    for (const field of requiredFields) {
      const request = FileDataBuilder.file().null(field).build();
      const response = await sut.execute(request);
      expect(response).toStrictEqual(new MissingParam(field));
    }
  });

  it("should upload file if data is valid", async () => {
    const sut = makeSut();
    const request = FileDataBuilder.file()
      .ext(mockServerConfig.allowedExts[0])
      .size(mockServerConfig.maxFileSize - 1000)
      .build();
    const response = await sut.execute(request);
    expect(response).toBeInstanceOf(FileUploaded);
  });
});
