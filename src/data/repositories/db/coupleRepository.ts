import { Injectable } from "@nestjs/common";
import { MapperRepository } from "../../mapper/mapper";
import { PrismaService } from "../../providers/db/prisma.service";
import { Couple } from "../../entity/coupleModel";

@Injectable()
export class CoupleRepository {
  constructor(
    private readonly db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async createCouple(couple: Couple): Promise<Couple> {
    const createdCouple = await this.db.couple.create({
      data: {
        userOneId: couple.userOneId,
        userTwoId: couple.userTwoId,
      },
    });
    return this.mapper.couple(createdCouple);
  }

  async getCoupleById(id: string): Promise<Couple> {
    const couple = await this.db.couple.findUnique({
      where: {
        id: id,
      },
    });
    return this.mapper.couple(couple);
  }

  async getCoupleByUserId(userId: string): Promise<Couple> {
    const couple = await this.db.couple.findFirst({
      where: {
        OR: [{ userOneId: userId }, { userTwoId: userId }],
      },
    });
    return this.mapper.couple(couple);
  }
}
