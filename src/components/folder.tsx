"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdFolder } from "react-icons/md";

export default function Folder({ name }: { name: string }) {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/${name}`} className="block cursor-pointer">
      <MdFolder className="w-9/12 h-auto m-auto" />
      <div>{name}</div>
    </Link>
  );
}
