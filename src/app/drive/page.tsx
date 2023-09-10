import { MdFolder, MdInsertDriveFile } from "react-icons/md";
import styles from "./page.module.css";
import UploadButton from "@/components/uploadButton";

export default function DrivePage() {
  return (
    <>
      <div
        className={`grid ${styles.fileGrid} gap-x-11 gap-y-8 text-center font-medium text-sm`}
      >
        {[...Array(3)].map((_, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <MdFolder className="w-9/12 h-auto m-auto" />
              <div>Folder {index + 1}</div>
            </div>
          );
        })}
        {[...Array(3)].map((_, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <div>
                <MdInsertDriveFile className="w-9/12 h-auto m-auto" />
              </div>
              <div>File-{index + 1}.jpg</div>
            </div>
          );
        })}
      </div>
      <UploadButton />
    </>
  );
}
