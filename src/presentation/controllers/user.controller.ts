import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UserApplication } from "../../application/applications/user.application";
import { UserRequestDto } from "../dto/request/user.request.dto";
import { UserResponseDto } from "../dto/response/user.response.dto";

@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(private readonly userApplication: UserApplication) {}

  @Post()
  @ApiCreatedResponse({ type: UserResponseDto })
  async createUser(@Body() data: UserRequestDto): Promise<UserResponseDto> {
    const user = await this.userApplication.createUser(data);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }

  @Get(":id")
  @ApiOkResponse({ type: UserResponseDto })
  async getUserById(@Param("id") id: string): Promise<UserResponseDto> {
    return this.userApplication.getUserById(id);
  }

  @Get("email/:email")
  @ApiOkResponse({ type: UserResponseDto })
  async getUserByEmail(
    @Param("email") email: string,
  ): Promise<UserResponseDto> {
    return this.userApplication.getUserByEmail(email);
  }
}
