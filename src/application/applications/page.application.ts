import { Injectable } from "@nestjs/common";
import {
  BadRequestException,
  NotFoundException,
} from "@nestjs/common/exceptions";
import { Page } from "../../data/entity/pageModel";
import { PageDomain } from "../../domain/services/pageDomain";
import { MusicDomain } from "../../domain/services/musicDomain";
import { IRegisterPageApplication } from "../interfaces/IRegisterPage.application";
import { IUpdatePageTimingApplication } from "../interfaces/IUpdatePageTiming.application";
import { PageResponseDto } from "../../presentation/dto/response/page.response.dto";
import {
  mapPageBookToPageBookDto,
  mapPageToPageMapperDto,
} from "../mapping/page.mapping";
import { PageBookResponseDto } from "../../presentation/dto/response/page-book.response.dto";
import { CoupleAccess } from "../authorization/couple-access";

const MAX_DURATION_SECONDS = 3600;

@Injectable()
export class PageApplication {
  constructor(
    private readonly pageDomain: PageDomain,
    private readonly musicDomain: MusicDomain,
    private readonly coupleAccess: CoupleAccess,
  ) {}

  async setPageMusic(
    userId: string,
    id: string,
    musicId: string | null,
  ): Promise<PageResponseDto> {
    await this.coupleAccess.assertCanAccessPage(userId, id);

    if (musicId) {
      const music = await this.musicDomain.getMusicById(musicId);
      if (!music) {
        throw new NotFoundException("Música não encontrada");
      }
    }

    const updatedPage = await this.pageDomain.updatePageMusic(id, musicId);
    return mapPageToPageMapperDto(updatedPage);
  }

  async updatePageTiming(
    userId: string,
    id: string,
    data: IUpdatePageTimingApplication,
  ): Promise<PageResponseDto> {
    await this.coupleAccess.assertCanAccessPage(userId, id);

    this.validateTiming(data.durationSeconds, data.musicStartSeconds);

    const updatedPage = await this.pageDomain.updatePageTiming(id, {
      durationSeconds: data.durationSeconds,
      musicStartSeconds: data.musicStartSeconds,
    });
    return mapPageToPageMapperDto(updatedPage);
  }

  private validateTiming(
    durationSeconds: number | null | undefined,
    musicStartSeconds: number | undefined,
  ): void {
    // undefined = não informado, null = sem limite (ambos válidos)
    if (
      durationSeconds != null &&
      (!Number.isInteger(durationSeconds) ||
        durationSeconds < 1 ||
        durationSeconds > MAX_DURATION_SECONDS)
    ) {
      throw new BadRequestException(
        `A duração precisa ser um inteiro entre 1 e ${MAX_DURATION_SECONDS} segundos, ou null para não ter limite`,
      );
    }

    if (
      musicStartSeconds !== undefined &&
      (!Number.isInteger(musicStartSeconds) || musicStartSeconds < 0)
    ) {
      throw new BadRequestException(
        "O início da música precisa ser um inteiro maior ou igual a 0",
      );
    }
  }

  async createPage(
    userId: string,
    data: IRegisterPageApplication,
  ): Promise<PageResponseDto> {
    if (!data.coupleId) {
      throw new BadRequestException("Casal Não Encontrado");
    }

    await this.coupleAccess.assertUserInCouple(userId, data.coupleId);

    // Omitido = 15s padrão; null = sem limite de tempo
    const durationSeconds =
      data.durationSeconds === undefined ? 15 : data.durationSeconds;
    const musicStartSeconds = data.musicStartSeconds ?? 0;
    this.validateTiming(durationSeconds, musicStartSeconds);

    const page = new Page({
      coupleId: data.coupleId,
      order: data.order,
      musicId: data.musicId ?? null,
      durationSeconds: durationSeconds,
      musicStartSeconds: musicStartSeconds,
      createdAt: new Date(),
    });

    const createdPage = await this.pageDomain.createPage(page);
    return mapPageToPageMapperDto(createdPage);
  }

  async getPageById(userId: string, id: string): Promise<PageResponseDto> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }

    const page = await this.coupleAccess.assertCanAccessPage(userId, id);
    return mapPageToPageMapperDto(page);
  }

  async getBookByCoupleId(
    userId: string,
    coupleId: string,
  ): Promise<PageBookResponseDto[]> {
    if (!coupleId) {
      throw new BadRequestException("ID Não Encontrado");
    }

    await this.coupleAccess.assertUserInCouple(userId, coupleId);

    const book = await this.pageDomain.getBookByCoupleId(coupleId);
    return book.map(mapPageBookToPageBookDto);
  }

  async getPagesByCoupleId(
    userId: string,
    coupleId: string,
  ): Promise<PageResponseDto[]> {
    if (!coupleId) {
      throw new BadRequestException("ID Não Encontrado");
    }

    await this.coupleAccess.assertUserInCouple(userId, coupleId);

    const pages = await this.pageDomain.getPagesByCoupleId(coupleId);
    return pages.map(mapPageToPageMapperDto);
  }
}
