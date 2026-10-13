import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { User } from "../../data/entity/userModel";
import { UserDomain } from "../../domain/services/userDomain";
import { IRegisterUserApplication } from "../interfaces/IRegisterUser.application";
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
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

    if (!data.password || data.password.length < 6) {
      throw new BadRequestException("A senha precisa ter ao menos 6 caracteres");
    }

    const user = new User({
      name: data.name,
      email: data.email,
      password: await bcrypt.hash(data.password, 10),
      createdAt: new Date(),
    });

    const createdUser = await this.userDomain.createUser(user);
    return mapUserToUserMapperDto(createdUser);
  }

  async getUserById(userId: string, id: string): Promise<UserResponseDto> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }

    if (id !== userId) {
      throw new ForbiddenException("Sem permissão para acessar este usuário");
    }

    const user = await this.userDomain.getUserById(id);
    if (!user) {
      throw new NotFoundException("Usuário não encontrado");
    }

    return mapUserToUserMapperDto(user);
  }

  async getUserByEmail(
    userId: string,
    email: string,
  ): Promise<UserResponseDto> {
    if (!email) {
      throw new BadRequestException("Email Não Encontrado");
    }

    // Mesma resposta para "não existe" e "é de outra pessoa" (não revela quais emails existem)
    const user = await this.userDomain.getUserByEmail(email);
    if (!user || user.id !== userId) {
      throw new ForbiddenException("Sem permissão para acessar este usuário");
    }

    return mapUserToUserMapperDto(user);
  }
}
