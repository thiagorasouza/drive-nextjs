import { MdAdd } from "react-icons/md";

export default function UploadButton() {
  return (
    <div className="fixed right-0 bottom-0 z-10">
      <button className="rounded-xl bg-sky-200 w-14 h-14 shadow-lg mr-4 mb-24">
        <MdAdd className="m-auto w-7 h-7 cursor-pointer" />
      </button>
    </div>
  );
}
