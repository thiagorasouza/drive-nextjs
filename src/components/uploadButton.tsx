"use client";

import { uploadService } from "@/services/uploadFileService";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { MdAdd } from "react-icons/md";

export default function UploadButton() {
  const [message, setMessage] = useState<string>("");
  const fileRef = useRef(null);

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(""), 3000);
    }
  });

  function openFileDialog() {
    if (!fileRef.current) throw new Error("Cannot get file input reference");

    const fileInput: HTMLInputElement = fileRef.current;
    fileInput.click();
  }

  function submitForm(event: ChangeEvent<HTMLInputElement>) {
    const form = event.target.form;
    if (!form) throw new Error("File input needs to be inside a form");
    form.requestSubmit();
  }

  async function uploadFile(formData: FormData) {
    const uploadResult = await uploadService(formData);
    console.log("🚀 ~ uploadResult:", uploadResult);

    if (uploadResult.statusCode === 201) {
      setMessage("File uploaded successfully");
    } else {
      setMessage("Could not upload file. Try again later");
    }
  }

  return (
    <div className="flex flex-row items-center gap-5 fixed right-0 bottom-24 z-10">
      {message && (
        <div className="bg-slate-200 rounded-lg shadow-md py-4 px-6">
          {message}
        </div>
      )}
      <form action={uploadFile}>
        <input
          ref={fileRef}
          type="file"
          name="file"
          id="file"
          hidden
          onChange={submitForm}
        />
        <button
          className="rounded-xl bg-sky-200 w-14 h-14 shadow-lg mr-4"
          type="button"
          onClick={openFileDialog}
        >
          <MdAdd className="m-auto w-7 h-7 cursor-pointer" />
        </button>
      </form>
    </div>
  );
}
