import { Injectable } from "@nestjs/common";
import { BadRequestException } from "@nestjs/common/exceptions";
import { Video } from "../../data/entity/videoModel";
import { StorageService } from "../../data/providers/storage/storage.service";
import { CoupleAccess } from "../authorization/couple-access";
import { VideoDomain } from "../../domain/services/videoDomain";
import { VideoResponseDto } from "../../presentation/dto/response/video.response.dto";
import { mapVideoToVideoMapperDto } from "../mapping/video.mapping";

@Injectable()
export class VideoApplication {
  constructor(
    private readonly videoDomain: VideoDomain,
    private readonly coupleAccess: CoupleAccess,
    private readonly storage: StorageService,
  ) {}

  async uploadVideo(
    userId: string,
    pageId: string,
    file: Express.Multer.File,
  ): Promise<VideoResponseDto> {
    try {
      if (!file) {
        throw new BadRequestException("Nenhum vídeo enviado");
      }

      await this.coupleAccess.assertCanAccessPage(userId, pageId);

      const video = new Video({
        url: this.storage.getPublicUrl("videos", file.filename),
        sortOrder: await this.videoDomain.getNextSortOrder(pageId),
        pageId: pageId,
        createdAt: new Date(),
      });

      const createdVideo = await this.videoDomain.createVideo(video);
      return mapVideoToVideoMapperDto(createdVideo);
    } catch (error) {
      if (file) {
        await this.storage.deleteFile(file);
      }
      throw error;
    }
  }

  async getVideosByPageId(
    userId: string,
    pageId: string,
  ): Promise<VideoResponseDto[]> {
    await this.coupleAccess.assertCanAccessPage(userId, pageId);
    const videos = await this.videoDomain.getVideosByPageId(pageId);
    return videos.map(mapVideoToVideoMapperDto);
  }
}
