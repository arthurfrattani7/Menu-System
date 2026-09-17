import { UserRepository } from "../../data/repositories/db/userRepository";
import { User } from "../../data/entity/userModel";
export declare class UserDomain {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(user: User): Promise<User>;
    getUserById(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
}
