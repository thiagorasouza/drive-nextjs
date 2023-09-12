"use server";

import { supabase } from "./supabaseClient";

export async function uploadService(formData: FormData) {
  const file = formData.get("file") as File;
  const filePath = file.name;
  const fileBody = await file.arrayBuffer();

  const { data, error } = await supabase.storage
    .from("user-files")
    .upload(filePath, fileBody);
  console.log("🚀 ~ error:", error);
  console.log("🚀 ~ data:", data);

  if (error) {
    return {
      statusCode: 500,
      message: "Could not upload file",
    };
  }

  return {
    statusCode: 201,
    message: "File uploaded",
  };
}
