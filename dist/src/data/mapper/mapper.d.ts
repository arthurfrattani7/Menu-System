import { User } from "../entity/userModel";
import { UserMapperI } from "./mapper.interface";
export declare class MapperRepository {
    user(user: UserMapperI): User;
}
