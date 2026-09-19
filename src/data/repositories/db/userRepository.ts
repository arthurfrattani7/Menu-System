import { Injectable } from "@nestjs/common";
import { MapperRepository } from "../../mapper/mapper";
import { PrismaService } from "../../providers/db/prisma.service";
import { User } from "../../entity/userModel";

@Injectable()
export class UserRepository {
  constructor(
    private readonly db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async createUser(user: User): Promise<User> {
    const createdUser = await this.db.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return this.mapper.user(createdUser);
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.db.user.findUnique({
      where: {
        id: id,
      },
    });
    return this.mapper.user(user);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.db.user.findUnique({
      where: {
        email: email,
      },
    });
    return this.mapper.user(user);
  }
}
