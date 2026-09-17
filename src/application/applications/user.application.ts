import { Injectable } from "@nestjs/common";
import { User } from "../../data/entity/userModel";
import { UserDomain } from "../../domain/services/userDomain";
import { IRegisterUserApplication } from "../interfaces/IRegisterUser.application";
import { BadRequestException } from "@nestjs/common/exceptions";

@Injectable()
export class UserApplication {
  constructor(private readonly userDomain: UserDomain) {}

  async createUser(data: IRegisterUserApplication): Promise<User> {
    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date(),
    });

    return this.userDomain.createUser(user);
  }

  async getUserById(id: string): Promise<User> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }

    return this.userDomain.getUserById(id);
  }

  async getUserByEmail(email: string): Promise<User> {
    if (!email) {
      throw new BadRequestException("Email Não Encontrado");
    }

    return this.userDomain.getUserByEmail(email);
  }
}
