import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CoupleApplication } from "../../application/applications/couple.application";
import { CoupleRequestDto } from "../dto/request/couple.request.dto";
import { CoupleResponseDto } from "../dto/response/couple.response.dto";

@Controller("couple")
@ApiTags("Couple")
export class CoupleController {
  constructor(private readonly coupleApplication: CoupleApplication) {}

  @Post()
  @ApiCreatedResponse({ type: CoupleResponseDto })
  async createCouple(
    @Body() data: CoupleRequestDto,
  ): Promise<CoupleResponseDto> {
    return this.coupleApplication.createCouple(data);
  }

  @Get(":id")
  @ApiOkResponse({ type: CoupleResponseDto })
  async getCoupleById(@Param("id") id: string): Promise<CoupleResponseDto> {
    return this.coupleApplication.getCoupleById(id);
  }

  @Get("user/:userId")
  @ApiOkResponse({ type: CoupleResponseDto })
  async getCoupleByUserId(
    @Param("userId") userId: string,
  ): Promise<CoupleResponseDto> {
    return this.coupleApplication.getCoupleByUserId(userId);
  }
}
