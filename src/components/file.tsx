"use client";

import { downloadLinkService } from "@/services/downloadLinkService";
import Image from "next/image";
import { MouseEventHandler, useRef, useState } from "react";
import { MdInsertDriveFile } from "react-icons/md";

export default function File({
  name,
  onMenuClick,
}: {
  name: string;
  onMenuClick: (itemName: string) => void;
}) {
  const linkRef = useRef(null);

  async function downloadFile(fileName: string) {
    if (!linkRef.current) throw new Error("File link ref not found");

    const filePath = `files/${fileName}`;
    const downloadLinkResult = await downloadLinkService(filePath);
    const fileLink = downloadLinkResult.data.publicUrl;

    const linkAnchor: HTMLAnchorElement = linkRef.current;

    linkAnchor.href = fileLink;
    linkAnchor.download = "";
    linkAnchor.click();
  }

  return (
    <>
      <a ref={linkRef} hidden></a>
      <div>
        <MdInsertDriveFile
          className="w-9/12 h-auto m-auto cursor-pointer"
          onClick={() => downloadFile(name)}
        />
        <div className="flex flex-row">
          <span className="cursor-pointer" onClick={() => downloadFile(name)}>
            {name}
          </span>
          <Image
            width={18}
            height={18}
            src="/img/three-dots.svg"
            alt="File actions menu"
            className="ml-auto cursor-pointer"
            onClick={() => onMenuClick(name)}
          />
        </div>
      </div>
    </>
  );
}
