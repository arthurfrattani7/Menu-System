import { Injectable } from "@nestjs/common";
import { PageRepository } from "../../data/repositories/db/pageRepository";
import { Page } from "../../data/entity/pageModel";
import { PageBook } from "../../data/entity/pageBookModel";

@Injectable()
export class PageDomain {
  constructor(private readonly pageRepository: PageRepository) {}

  async createPage(page: Page): Promise<Page> {
    const createdPage = await this.pageRepository.createPage(page);
    return createdPage;
  }

  async getPageById(id: string): Promise<Page | null> {
    const page = await this.pageRepository.getPageById(id);
    return page;
  }

  async updatePageMusic(id: string, musicId: string | null): Promise<Page> {
    return this.pageRepository.updatePageMusic(id, musicId);
  }

  async getBookByCoupleId(coupleId: string): Promise<PageBook[]> {
    return this.pageRepository.getBookByCoupleId(coupleId);
  }

  async getPagesByCoupleId(coupleId: string): Promise<Page[]> {
    const pages = await this.pageRepository.getPagesByCoupleId(coupleId);
    return pages;
  }
}
