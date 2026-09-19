import { CoupleRepository } from "../../data/repositories/db/coupleRepository";
import { Couple } from "../../data/entity/coupleModel";
export declare class CoupleDomain {
    private readonly coupleRepository;
    constructor(coupleRepository: CoupleRepository);
    createCouple(couple: Couple): Promise<Couple>;
    getCoupleById(id: string): Promise<Couple>;
    getCoupleByUserId(userId: string): Promise<Couple>;
}
