import { MapperRepository } from "../../mapper/mapper";
import { PrismaService } from "../../providers/db/prisma.service";
import { User } from "../../entity/userModel";
export declare class UserRepository {
    private readonly db;
    private readonly mapper;
    constructor(db: PrismaService, mapper: MapperRepository);
    createUser(user: User): Promise<User>;
    getUserById(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
}
