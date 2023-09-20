"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

export default function BackButton() {
  const pathname = usePathname();

  const isNotRoot = (path: string) => path.lastIndexOf("/");

  if (isNotRoot(pathname)) {
    const previousFolderPath = pathname.slice(0, pathname.lastIndexOf("/"));

    return (
      <div className="mb-3">
        <Link
          href={previousFolderPath}
          className="flex flex-row items-center gap-3 cursor-pointer"
        >
          <MdArrowBack className="w-5 h-5" />
          <span>Back</span>
        </Link>
      </div>
    );
  } else {
    return null;
  }
}
