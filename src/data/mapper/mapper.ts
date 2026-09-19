import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { User } from "../entity/userModel";
import { Couple } from "../entity/coupleModel";
import { CoupleMapperI, UserMapperI } from "./mapper.interface";

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

    couple(couple: CoupleMapperI): Couple {
        return new Couple(
            {
                userOneId: couple.userOneId,
                userTwoId: couple.userTwoId,
                createdAt: couple.createdAt,
            },
            couple.id,
        );
    }
}