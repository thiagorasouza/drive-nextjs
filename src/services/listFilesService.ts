"use server";

import { supabase } from "./supabaseClient";

export async function listFilesService(folderName: string) {
  const folderPath = folderName ? `files/${folderName}` : "files";

  const { data, error } = await supabase.storage
    .from("user-files")
    .list(folderPath);

  if (error) {
    return {
      statusCode: 500,
      message: "Could not read files",
    };
  }

  return {
    statusCode: 200,
    data,
  };
}
