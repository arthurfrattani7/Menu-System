import { BadRequestException } from "@nestjs/common/exceptions";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";
import { extname } from "path";
import { v4 } from "uuid";
import {
  StorageService,
  UploadFolder,
} from "../../data/providers/storage/storage.service";

const storageService = new StorageService();

const MB = 1024 * 1024;

const RULES: Record<UploadFolder, { mime: string; maxSize: number }> = {
  photos: { mime: "image/", maxSize: 10 * MB },
  videos: { mime: "video/", maxSize: 200 * MB },
  music: { mime: "audio/", maxSize: 30 * MB },
};

export function uploadOptions(folder: UploadFolder): MulterOptions {
  const rule = RULES[folder];

  return {
    storage: diskStorage({
      destination: (_req, _file, cb) =>
        cb(null, storageService.getFolderPath(folder)),
      filename: (_req, file, cb) =>
        cb(null, `${v4()}${extname(file.originalname).toLowerCase()}`),
    }),
    limits: { fileSize: rule.maxSize },
    fileFilter: (_req, file, cb) => {
      if (!file.mimetype.startsWith(rule.mime)) {
        return cb(
          new BadRequestException(
            `Arquivo inválido: esperado ${rule.mime}* e recebido ${file.mimetype}`,
          ),
          false,
        );
      }
      cb(null, true);
    },
  };
}
