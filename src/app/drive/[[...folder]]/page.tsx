import UploadButton from "@/components/uploadButton";
import { listFilesService } from "@/services/listFilesService";

import BackButton from "@/components/backButton";
import FileGrid from "@/components/fileGrid";

export const dynamic = "force-dynamic";

export default async function DrivePage({
  params,
}: {
  params: { folder: string };
}) {
  const folderName = params.folder;
  const basePath = `files/${folderName}`;
  const listFilesResult = await listFilesService(folderName);
  // console.log("🚀 ~ basePath:", basePath);
  const items = listFilesResult.data;

  return (
    <>
      <BackButton />
      {items ? (
        <FileGrid basePath={basePath} items={items} />
      ) : (
        <div>No files here yet</div>
      )}
      <UploadButton />
    </>
  );
}
