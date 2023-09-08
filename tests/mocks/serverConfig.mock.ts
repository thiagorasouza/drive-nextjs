import { ServerConfig } from "@/lib/domain/protocols";

export const mockServerConfig: ServerConfig = {
  maxFileSize: 2 * 1024 * 1024, // 2 MB
  allowedExts: ["test1", "test2"],
};
