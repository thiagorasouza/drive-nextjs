"use client";

import styles from "./fileGrid.module.css";
import File from "@/components/file";
import Folder from "@/components/folder";
import { FileObject } from "@supabase/storage-js/src/lib/types";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdDelete, MdInsertDriveFile } from "react-icons/md";
import ActionsMenu from "./actionsMenu";

export default function FileGrid({
  basePath,
  items,
}: {
  basePath: string;
  items: FileObject[];
}) {
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [actionsMenuItemName, setActionsMenuItemName] = useState<string>("");
  const [actionsMenuItemPath, setActionsMenuItemPath] = useState<string>("");

  const itemIsFolder = (file: { id: string | null }) => file.id === null;

  function openActionsMenu(itemName: string) {
    const itemPath = `${basePath}/${itemName}`;

    setShowActionsMenu(true);
    setActionsMenuItemName(itemName);
    setActionsMenuItemPath(itemPath);
  }

  return (
    <>
      <div
        className={`grid ${styles.fileGrid} gap-x-11 gap-y-8 text-center font-medium text-sm`}
      >
        {items.map((item, index) => {
          if (itemIsFolder(item)) {
            return <Folder key={index} name={item.name} />;
          } else {
            return (
              <File
                key={index}
                name={item.name}
                onMenuClick={openActionsMenu}
              />
            );
          }
        })}
      </div>
      {showActionsMenu && (
        <ActionsMenu
          itemName={actionsMenuItemName}
          itemPath={actionsMenuItemPath}
        />
      )}
    </>
  );
}
