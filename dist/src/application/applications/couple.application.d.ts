import { Couple } from "../../data/entity/coupleModel";
import { CoupleDomain } from "../../domain/services/coupleDomain";
import { IRegisterCoupleApplication } from "../interfaces/IRegisterCouple.application";
export declare class CoupleApplication {
    private readonly coupleDomain;
    constructor(coupleDomain: CoupleDomain);
    createCouple(data: IRegisterCoupleApplication): Promise<Couple>;
    getCoupleById(id: string): Promise<Couple>;
    getCoupleByUserId(userId: string): Promise<Couple>;
}
