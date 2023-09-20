"use server";

import { supabase } from "./supabaseClient";

export async function deleteFileService(filePath: string) {
  const { data, error } = await supabase.storage
    .from("user-files")
    .remove([filePath]);

  if (error) {
    return {
      statusCode: 500,
      message: "Could not delete file",
    };
  }

  return {
    statusCode: 201,
  };
}
