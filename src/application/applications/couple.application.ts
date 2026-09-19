import { Injectable } from "@nestjs/common";
import { Couple } from "../../data/entity/coupleModel";
import { CoupleDomain } from "../../domain/services/coupleDomain";
import { IRegisterCoupleApplication } from "../interfaces/IRegisterCouple.application";
import { BadRequestException } from "@nestjs/common/exceptions";
import { CoupleResponseDto } from "../../presentation/dto/response/couple.response.dto";
import { mapCoupleToCoupleMapperDto } from "../mapping/couple.mapping";

@Injectable()
export class CoupleApplication {
  constructor(private readonly coupleDomain: CoupleDomain) {}

  async createCouple(
    data: IRegisterCoupleApplication,
  ): Promise<CoupleResponseDto> {
    if (data.userOneId === data.userTwoId) {
      throw new BadRequestException(
        "Um casal precisa de dois usuários diferentes",
      );
    }

    const couple = new Couple({
      userOneId: data.userOneId,
      userTwoId: data.userTwoId,
      createdAt: new Date(),
    });

    const createdCouple = await this.coupleDomain.createCouple(couple);
    return mapCoupleToCoupleMapperDto(createdCouple);
  }

  async getCoupleById(id: string): Promise<CoupleResponseDto> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }

    const couple = await this.coupleDomain.getCoupleById(id);
    return mapCoupleToCoupleMapperDto(couple);
  }

  async getCoupleByUserId(userId: string): Promise<CoupleResponseDto> {
    if (!userId) {
      throw new BadRequestException("ID Não Encontrado");
    }

    const couple = await this.coupleDomain.getCoupleByUserId(userId);
    return mapCoupleToCoupleMapperDto(couple);
  }
}
