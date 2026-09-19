import { Injectable } from "@nestjs/common";
import { CoupleRepository } from "../../data/repositories/db/coupleRepository";
import { Couple } from "../../data/entity/coupleModel";

@Injectable()
export class CoupleDomain {
  constructor(private readonly coupleRepository: CoupleRepository) {}

  async createCouple(couple: Couple): Promise<Couple> {
    const createdCouple = await this.coupleRepository.createCouple(couple);
    return createdCouple;
  }

  async getCoupleById(id: string): Promise<Couple> {
    const couple = await this.coupleRepository.getCoupleById(id);
    return couple;
  }

  async getCoupleByUserId(userId: string): Promise<Couple> {
    const couple = await this.coupleRepository.getCoupleByUserId(userId);
    return couple;
  }
}
