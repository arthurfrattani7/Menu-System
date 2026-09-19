import { User } from "../entity/userModel";
import { Couple } from "../entity/coupleModel";
import { CoupleMapperI, UserMapperI } from "./mapper.interface";
export declare class MapperRepository {
    user(user: UserMapperI): User;
    couple(couple: CoupleMapperI): Couple;
}
