import { Injectable } from "@nestjs/common";
import { MapperRepository } from "../../mapper/mapper";
import { PrismaService } from "../../providers/db/prisma.service";
import { Page } from "../../entity/pageModel";
import { PageBook } from "../../entity/pageBookModel";

@Injectable()
export class PageRepository {
  constructor(
    private readonly db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async createPage(page: Page): Promise<Page> {
    const createdPage = await this.db.page.create({
      data: {
        coupleId: page.coupleId,
        order: page.order,
        musicId: page.musicId,
      },
    });
    return this.mapper.page(createdPage);
  }

  async getPageById(id: string): Promise<Page | null> {
    const page = await this.db.page.findUnique({
      where: {
        id: id,
      },
    });
    return this.mapper.page(page);
  }

  async updatePageMusic(id: string, musicId: string | null): Promise<Page> {
    const page = await this.db.page.update({
      where: { id: id },
      data: { musicId: musicId },
    });
    return this.mapper.page(page);
  }

  async getBookByCoupleId(coupleId: string): Promise<PageBook[]> {
    const pages = await this.db.page.findMany({
      where: { coupleId: coupleId },
      orderBy: { order: "asc" },
      include: {
        music: true,
        photos: { orderBy: { sortOrder: "asc" } },
        videos: { orderBy: { sortOrder: "asc" } },
      },
    });

    return pages.map((page) => ({
      page: this.mapper.page(page),
      music: page.music ? this.mapper.music(page.music) : null,
      photos: page.photos.map((photo) => this.mapper.photo(photo)),
      videos: page.videos.map((video) => this.mapper.video(video)),
    }));
  }

  async getPagesByCoupleId(coupleId: string): Promise<Page[]> {
    const pages = await this.db.page.findMany({
      where: {
        coupleId: coupleId,
      },
      orderBy: {
        order: "asc",
      },
    });
    return pages.map((page) => this.mapper.page(page));
  }
}
