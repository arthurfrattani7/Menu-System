import { MapperRepository } from "../../mapper/mapper";
import { PrismaService } from "../../providers/db/prisma.service";
import { Couple } from "../../entity/coupleModel";
export declare class CoupleRepository {
    private readonly db;
    private readonly mapper;
    constructor(db: PrismaService, mapper: MapperRepository);
    createCouple(couple: Couple): Promise<Couple>;
    getCoupleById(id: string): Promise<Couple>;
    getCoupleByUserId(userId: string): Promise<Couple>;
}
