import { Injectable } from "@nestjs/common";
import { VideoRepository } from "../../data/repositories/db/videoRepository";
import { Video } from "../../data/entity/videoModel";

@Injectable()
export class VideoDomain {
  constructor(private readonly videoRepository: VideoRepository) {}

  async getNextSortOrder(pageId: string): Promise<number> {
    return this.videoRepository.getNextSortOrder(pageId);
  }

  async createVideo(video: Video): Promise<Video> {
    return this.videoRepository.createVideo(video);
  }

  async getVideosByPageId(pageId: string): Promise<Video[]> {
    return this.videoRepository.getVideosByPageId(pageId);
  }
}
