import { deleteFileService } from "@/services/deleteFileService";
import { MdDelete, MdInsertDriveFile } from "react-icons/md";

export default function ActionsMenu({
  itemName,
  itemPath,
}: {
  itemName: string;
  itemPath: string;
}) {
  async function deleteFile(itemPath: string) {
    console.log("🚀 ~ itemPath:", itemPath);
    const deleteFileResult = await deleteFileService(itemPath);

    // Needs RLS
    if (deleteFileResult.statusCode === 201) {
      console.log("File deleted");
    } else {
      console.log("Unable to delete file");
    }
  }

  return (
    <div className="fixed right-0 left-0 bottom-0 bg-sky-100 z-20 rounded-2xl font-semibold">
      <ul className="flex flex-col items-start gap-4 py-4 ">
        <li className="flex flex-row items-center gap-4  px-5">
          <MdInsertDriveFile className="w-4 h-auto m-auto" />
          <span>{itemName}</span>
        </li>
        <div className="border-y border-slate-400 self-stretch"></div>
        <li className="flex flex-row items-center gap-4 px-5">
          <MdDelete className="w-4 h-auto m-auto" />
          <span onClick={() => deleteFile(itemPath)}>Remover</span>
        </li>
      </ul>
    </div>
  );
}
