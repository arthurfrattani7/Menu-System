import { Injectable } from "@nestjs/common";
import {
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common/exceptions";
import { Couple } from "../../data/entity/coupleModel";
import { Page } from "../../data/entity/pageModel";
import { CoupleDomain } from "../../domain/services/coupleDomain";
import { PageDomain } from "../../domain/services/pageDomain";

// Regra única de autorização: só os dois integrantes de um casal acessam
// o casal, as páginas e a mídia (fotos, vídeos, música) dele.
@Injectable()
export class CoupleAccess {
  constructor(
    private readonly coupleDomain: CoupleDomain,
    private readonly pageDomain: PageDomain,
  ) {}

  async assertUserInCouple(userId: string, coupleId: string): Promise<Couple> {
    const couple = await this.coupleDomain.getCoupleById(coupleId);
    if (!couple) {
      throw new NotFoundException("Casal não encontrado");
    }

    if (couple.userOneId !== userId && couple.userTwoId !== userId) {
      throw new ForbiddenException("Sem permissão para acessar este casal");
    }

    return couple;
  }

  async assertCanAccessPage(userId: string, pageId: string): Promise<Page> {
    const page = await this.pageDomain.getPageById(pageId);
    if (!page) {
      throw new NotFoundException("Página não encontrada");
    }

    await this.assertUserInCouple(userId, page.coupleId);
    return page;
  }
}
