import { User } from "../../data/entity/userModel";
import { UserDomain } from "../../domain/services/userDomain";
import { IRegisterUserApplication } from "../interfaces/IRegisterUser.application";
export declare class UserApplication {
    private readonly userDomain;
    constructor(userDomain: UserDomain);
    createUser(data: IRegisterUserApplication): Promise<User>;
    getUserById(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
}
