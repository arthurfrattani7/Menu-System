import { Injectable } from "@nestjs/common";
import { Couple } from "../../data/entity/coupleModel";
import { CoupleDomain } from "../../domain/services/coupleDomain";
import { UserDomain } from "../../domain/services/userDomain";
import { IRegisterCoupleApplication } from "../interfaces/IRegisterCouple.application";
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common/exceptions";
import { CoupleResponseDto } from "../../presentation/dto/response/couple.response.dto";
import { mapCoupleToCoupleMapperDto } from "../mapping/couple.mapping";
import { CoupleAccess } from "../authorization/couple-access";

@Injectable()
export class CoupleApplication {
  constructor(
    private readonly coupleDomain: CoupleDomain,
    private readonly userDomain: UserDomain,
    private readonly coupleAccess: CoupleAccess,
  ) {}

  async createCouple(
    userId: string,
    data: IRegisterCoupleApplication,
  ): Promise<CoupleResponseDto> {
    if (data.userOneId === data.userTwoId) {
      throw new BadRequestException(
        "Um casal precisa de dois usuários diferentes",
      );
    }

    // Quem cria o casal precisa ser um dos dois integrantes
    if (userId !== data.userOneId && userId !== data.userTwoId) {
      throw new ForbiddenException(
        "Você só pode criar um casal do qual faz parte",
      );
    }

    for (const id of [data.userOneId, data.userTwoId]) {
      const user = await this.userDomain.getUserById(id);
      if (!user) {
        throw new NotFoundException("Usuário não encontrado");
      }

      // 1 usuário = 1 casal (vale para as duas posições do casal)
      const existingCouple = await this.coupleDomain.getCoupleByUserId(id);
      if (existingCouple) {
        throw new ConflictException(
          "Um dos usuários já faz parte de um casal",
        );
      }
    }

    const couple = new Couple({
      userOneId: data.userOneId,
      userTwoId: data.userTwoId,
      createdAt: new Date(),
    });

    const createdCouple = await this.coupleDomain.createCouple(couple);
    return mapCoupleToCoupleMapperDto(createdCouple);
  }

  async getCoupleById(userId: string, id: string): Promise<CoupleResponseDto> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }

    const couple = await this.coupleAccess.assertUserInCouple(userId, id);
    return mapCoupleToCoupleMapperDto(couple);
  }

  async getCoupleByUserId(
    userId: string,
    targetUserId: string,
  ): Promise<CoupleResponseDto> {
    if (!targetUserId) {
      throw new BadRequestException("ID Não Encontrado");
    }

    if (targetUserId !== userId) {
      throw new ForbiddenException("Sem permissão para acessar este usuário");
    }

    const couple = await this.coupleDomain.getCoupleByUserId(userId);
    if (!couple) {
      throw new NotFoundException("Casal não encontrado");
    }

    return mapCoupleToCoupleMapperDto(couple);
  }
}
