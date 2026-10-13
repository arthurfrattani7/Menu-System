import { Injectable } from "@nestjs/common";
import { existsSync, mkdirSync, unlink } from "fs";
import { join } from "path";

export type UploadFolder = "photos" | "videos" | "music";

@Injectable()
export class StorageService {
  readonly rootDir = join(process.cwd(), "uploads");

  getFolderPath(folder: UploadFolder): string {
    const path = join(this.rootDir, folder);
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
    }
    return path;
  }

  getPublicUrl(folder: UploadFolder, filename: string): string {
    const baseUrl =
      process.env.APP_URL || `http://localhost:${process.env.PORT || 3000}`;
    return `${baseUrl}/uploads/${folder}/${filename}`;
  }

  // Remove o arquivo do disco (usado quando o registro no banco falha).
  async deleteFile(file: Express.Multer.File): Promise<void> {
    await new Promise<void>((resolve) => unlink(file.path, () => resolve()));
  }
}
