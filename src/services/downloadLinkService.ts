"use server";

import { supabase } from "./supabaseClient";

export async function downloadLinkService(filePath: string) {
  const { data } = await supabase.storage
    .from("user-files")
    .getPublicUrl(filePath);

  return {
    statusCode: 200,
    data,
  };
}
