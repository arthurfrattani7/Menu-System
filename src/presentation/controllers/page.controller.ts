import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PageApplication } from "../../application/applications/page.application";
import { PageRequestDto } from "../dto/request/page.request.dto";
import { PageResponseDto } from "../dto/response/page.response.dto";

@Controller("page")
@ApiTags("Page")
export class PageController {
  constructor(private readonly pageApplication: PageApplication) {}

  @Post()
  @ApiCreatedResponse({ type: PageResponseDto })
  async createPage(@Body() data: PageRequestDto): Promise<PageResponseDto> {
    return this.pageApplication.createPage(data);
  }

  @Get(":id")
  @ApiOkResponse({ type: PageResponseDto })
  async getPageById(@Param("id") id: string): Promise<PageResponseDto> {
    return this.pageApplication.getPageById(id);
  }

  @Get("couple/:coupleId")
  @ApiOkResponse({ type: PageResponseDto, isArray: true })
  async getPagesByCoupleId(
    @Param("coupleId") coupleId: string,
  ): Promise<PageResponseDto[]> {
    return this.pageApplication.getPagesByCoupleId(coupleId);
  }
}
