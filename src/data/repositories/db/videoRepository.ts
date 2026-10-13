import { Injectable } from "@nestjs/common";
import { MapperRepository } from "../../mapper/mapper";
import { PrismaService } from "../../providers/db/prisma.service";
import { Video } from "../../entity/videoModel";

@Injectable()
export class VideoRepository {
  constructor(
    private readonly db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async createVideo(video: Video): Promise<Video> {
    const created = await this.db.video.create({
      data: {
        id: video.id,
        url: video.url,
        sortOrder: video.sortOrder,
        pageId: video.pageId,
        createdAt: video.createdAt,
      },
    });
    return this.mapper.video(created);
  }

  async getNextSortOrder(pageId: string): Promise<number> {
    const result = await this.db.video.aggregate({
      where: { pageId: pageId },
      _max: { sortOrder: true },
    });
    return (result._max.sortOrder ?? -1) + 1;
  }

  async getVideosByPageId(pageId: string): Promise<Video[]> {
    const items = await this.db.video.findMany({
      where: { pageId: pageId },
      orderBy: { sortOrder: "asc" },
    });
    return items.map((item) => this.mapper.video(item));
  }
}
