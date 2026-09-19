import { Injectable } from "@nestjs/common";
import { PageRepository } from "../../data/repositories/db/pageRepository";
import { Page } from "../../data/entity/pageModel";

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

  async getPagesByCoupleId(coupleId: string): Promise<Page[]> {
    const pages = await this.pageRepository.getPagesByCoupleId(coupleId);
    return pages;
  }
}
