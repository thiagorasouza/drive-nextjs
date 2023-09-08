import { createClient } from "@supabase/supabase-js";
import { SupabaseFileRepository } from "@/lib/data/supabaseFileRepository";
import { FileDataBuilder } from "../../mocks";
import { Success } from "@/lib/core";

const makeSut = (): SupabaseFileRepository => {
  const client = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_API_KEY as string,
    {
      auth: {
        persistSession: false,
      },
    },
  );

  return new SupabaseFileRepository(client, "user-files");
};

describe("SupabaseFileRepository Test Suite", () => {
  it.skip("should upload a file", async () => {
    const sut = makeSut();
    const fileProps = FileDataBuilder.file().buildProps();

    const result = await sut.upload(fileProps);
    expect(result).toBeInstanceOf(Success);
  });
});
