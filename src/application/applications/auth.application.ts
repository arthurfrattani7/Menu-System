import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import * as bcrypt from "bcryptjs";
import { UserDomain } from "../../domain/services/userDomain";
import { IAuthLoginApplication } from "../interfaces/IAuthLogin.application";
import { AuthResponseDto } from "../../presentation/dto/response/auth.response.dto";
import { mapUserToUserMapperDto } from "../mapping/user.mapping";

@Injectable()
export class AuthApplication {
  constructor(
    private readonly userDomain: UserDomain,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: IAuthLoginApplication): Promise<AuthResponseDto> {
    const user = await this.userDomain.getUserByEmail(data.email);

    // Mesma mensagem para email inexistente e senha errada (não revela qual falhou)
    const passwordMatches =
      !!user && (await bcrypt.compare(data.password, user.password));
    if (!passwordMatches) {
      throw new UnauthorizedException("Email ou senha inválidos");
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return { accessToken, user: mapUserToUserMapperDto(user) };
  }
}
