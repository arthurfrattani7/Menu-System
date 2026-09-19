import { Injectable } from "@nestjs/common";
import {
  BadRequestException,
  NotFoundException,
} from "@nestjs/common/exceptions";
import { Page } from "../../data/entity/pageModel";
import { PageDomain } from "../../domain/services/pageDomain";
import { IRegisterPageApplication } from "../interfaces/IRegisterPage.application";
import { PageResponseDto } from "../../presentation/dto/response/page.response.dto";
import { mapPageToPageMapperDto } from "../mapping/page.mapping";

@Injectable()
export class PageApplication {
  constructor(private readonly pageDomain: PageDomain) {}

  async createPage(data: IRegisterPageApplication): Promise<PageResponseDto> {
    if (!data.coupleId) {
      throw new BadRequestException("Casal Não Encontrado");
    }

    const page = new Page({
      coupleId: data.coupleId,
      order: data.order,
      musicId: data.musicId ?? null,
      createdAt: new Date(),
    });

    const createdPage = await this.pageDomain.createPage(page);
    return mapPageToPageMapperDto(createdPage);
  }

  async getPageById(id: string): Promise<PageResponseDto> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }

    const page = await this.pageDomain.getPageById(id);
    if (!page) {
      throw new NotFoundException("Página não encontrada");
    }

    return mapPageToPageMapperDto(page);
  }

  async getPagesByCoupleId(coupleId: string): Promise<PageResponseDto[]> {
    if (!coupleId) {
      throw new BadRequestException("ID Não Encontrado");
    }

    const pages = await this.pageDomain.getPagesByCoupleId(coupleId);
    return pages.map(mapPageToPageMapperDto);
  }
}
