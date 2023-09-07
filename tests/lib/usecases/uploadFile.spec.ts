import { UploadFile } from "@/lib/usecases/uploadFile";
import { FileDataBuilder } from "../../mocks/fileDataBuilder";
import { MissingParam } from "@/lib/core/failures/missingParam";

const makeSut = () => {
  const sut = new UploadFile();
  return { sut };
};

describe("UploadFile Usecase Test Suite", () => {
  it("should return MissingParam if any required field is missing", async () => {
    const { sut } = makeSut();

    const requiredFields = [
      "fileData",
      "fileName",
      "filePath",
      "fileSize",
      "fileExt",
      "owner",
    ];

    for (const field of requiredFields) {
      const request = FileDataBuilder.file().null(field).build();
      const result = await sut.execute(request);
      expect(result).toStrictEqual(new MissingParam(field));
    }
  });
});
