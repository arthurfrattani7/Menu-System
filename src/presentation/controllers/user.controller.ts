import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UserApplication } from "../../application/applications/user.application";
import { CurrentUserId } from "../auth/current-user.decorator";
import { Public } from "../auth/public.decorator";
import { UserRequestDto } from "../dto/request/user.request.dto";
import { UserResponseDto } from "../dto/response/user.response.dto";

@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(private readonly userApplication: UserApplication) {}

  @Public()
  @Post()
  @ApiCreatedResponse({ type: UserResponseDto })
  async createUser(@Body() data: UserRequestDto): Promise<UserResponseDto> {
    return this.userApplication.createUser(data);
  }

  @Get(":id")
  @ApiOkResponse({ type: UserResponseDto })
  async getUserById(
    @CurrentUserId() userId: string,
    @Param("id") id: string,
  ): Promise<UserResponseDto> {
    return this.userApplication.getUserById(userId, id);
  }

  @Get("email/:email")
  @ApiOkResponse({ type: UserResponseDto })
  async getUserByEmail(
    @CurrentUserId() userId: string,
    @Param("email") email: string,
  ): Promise<UserResponseDto> {
    return this.userApplication.getUserByEmail(userId, email);
  }
}
