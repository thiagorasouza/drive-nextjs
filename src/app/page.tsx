import { redirect } from "next/navigation";

export default function Home() {
  redirect("/drive");
  return null;
}
