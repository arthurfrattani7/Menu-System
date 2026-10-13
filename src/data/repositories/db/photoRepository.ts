import { Injectable } from "@nestjs/common";
import { MapperRepository } from "../../mapper/mapper";
import { PrismaService } from "../../providers/db/prisma.service";
import { Photo } from "../../entity/photoModel";

@Injectable()
export class PhotoRepository {
  constructor(
    private readonly db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async createPhoto(photo: Photo): Promise<Photo> {
    const created = await this.db.photo.create({
      data: {
        id: photo.id,
        url: photo.url,
        sortOrder: photo.sortOrder,
        pageId: photo.pageId,
        createdAt: photo.createdAt,
      },
    });
    return this.mapper.photo(created);
  }

  async getNextSortOrder(pageId: string): Promise<number> {
    const result = await this.db.photo.aggregate({
      where: { pageId: pageId },
      _max: { sortOrder: true },
    });
    return (result._max.sortOrder ?? -1) + 1;
  }

  async getPhotosByPageId(pageId: string): Promise<Photo[]> {
    const items = await this.db.photo.findMany({
      where: { pageId: pageId },
      orderBy: { sortOrder: "asc" },
    });
    return items.map((item) => this.mapper.photo(item));
  }
}
