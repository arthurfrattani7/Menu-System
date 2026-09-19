import { Injectable } from "@nestjs/common";
import { User } from "../../data/entity/userModel";
import { UserDomain } from "../../domain/services/userDomain";
import { IRegisterUserApplication } from "../interfaces/IRegisterUser.application";
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from "@nestjs/common/exceptions";
import { UserResponseDto } from "../../presentation/dto/response/user.response.dto";
import { mapUserToUserMapperDto } from "../mapping/user.mapping";

@Injectable()
export class UserApplication {
  constructor(private readonly userDomain: UserDomain) {}

  async createUser(data: IRegisterUserApplication): Promise<UserResponseDto> {
    const existingUser = await this.userDomain.getUserByEmail(data.email);

    if (existingUser) {
      throw new ConflictException("Email já cadastrado");
    }

    const user = new User({
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date(),
    });

    const createdUser = await this.userDomain.createUser(user);
    return mapUserToUserMapperDto(createdUser);
  }

  async getUserById(id: string): Promise<UserResponseDto> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }

    const user = await this.userDomain.getUserById(id);
    if (!user) {
      throw new NotFoundException("Usuário não encontrado");
    }

    return mapUserToUserMapperDto(user);
  }

  async getUserByEmail(email: string): Promise<UserResponseDto> {
    if (!email) {
      throw new BadRequestException("Email Não Encontrado");
    }

    const user = await this.userDomain.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException("Usuário não encontrado");
    }

    return mapUserToUserMapperDto(user);
  }
}
