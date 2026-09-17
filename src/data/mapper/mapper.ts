import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { User } from "../entity/userModel";
import { UserMapperI } from "./mapper.interface";

@Injectable()
export class MapperRepository {
    user(user: UserMapperI): User {
        return new User(
            {
                name: user.name,
                email: user.email,
                password: user.password,
                createdAt: user.createdAt,
            },
            user.id,
        );
    }
}