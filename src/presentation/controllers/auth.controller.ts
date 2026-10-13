import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthApplication } from "../../application/applications/auth.application";
import { Public } from "../auth/public.decorator";
import { AuthLoginRequestDto } from "../dto/request/auth.request.dto";
import { AuthResponseDto } from "../dto/response/auth.response.dto";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authApplication: AuthApplication) {}

  @Public()
  @Post("login")
  @HttpCode(200)
  @ApiOkResponse({ type: AuthResponseDto })
  async login(@Body() data: AuthLoginRequestDto): Promise<AuthResponseDto> {
    return this.authApplication.login(data);
  }
}
