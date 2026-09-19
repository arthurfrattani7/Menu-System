import { Injectable } from "@nestjs/common";
import { Couple } from "../../data/entity/coupleModel";
import { CoupleDomain } from "../../domain/services/coupleDomain";
import { IRegisterCoupleApplication } from "../interfaces/IRegisterCouple.application";
import { BadRequestException } from "@nestjs/common/exceptions";

@Injectable()
export class CoupleApplication {
  constructor(private readonly coupleDomain: CoupleDomain) {}

  async createCouple(data: IRegisterCoupleApplication): Promise<Couple> {
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

    return this.coupleDomain.createCouple(couple);
  }

  async getCoupleById(id: string): Promise<Couple> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }

    return this.coupleDomain.getCoupleById(id);
  }

  async getCoupleByUserId(userId: string): Promise<Couple> {
    if (!userId) {
      throw new BadRequestException("ID Não Encontrado");
    }

    return this.coupleDomain.getCoupleByUserId(userId);
  }
}
