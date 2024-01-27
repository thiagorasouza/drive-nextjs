// "use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
if (!supabaseUrl) {
  throw new Error("Supabase URL environment variable not provided");
}

const supabaseApiKey =
  process.env.SUPABASE_API_KEY || process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
if (!supabaseApiKey) {
  throw new Error("Supabase API Key environment variable not provided");
}

export const supabase = createClient(supabaseUrl, supabaseApiKey, {
  auth: { persistSession: false },
});
