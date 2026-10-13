import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { PageMusicRequestDto } from "../dto/request/page-music.request.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PageApplication } from "../../application/applications/page.application";
import { CurrentUserId } from "../auth/current-user.decorator";
import { PageRequestDto } from "../dto/request/page.request.dto";
import { PageBookResponseDto } from "../dto/response/page-book.response.dto";
import { PageResponseDto } from "../dto/response/page.response.dto";

@Controller("page")
@ApiTags("Page")
export class PageController {
  constructor(private readonly pageApplication: PageApplication) {}

  @Post()
  @ApiCreatedResponse({ type: PageResponseDto })
  async createPage(
    @CurrentUserId() userId: string,
    @Body() data: PageRequestDto,
  ): Promise<PageResponseDto> {
    return this.pageApplication.createPage(userId, data);
  }

  @Get(":id")
  @ApiOkResponse({ type: PageResponseDto })
  async getPageById(
    @CurrentUserId() userId: string,
    @Param("id") id: string,
  ): Promise<PageResponseDto> {
    return this.pageApplication.getPageById(userId, id);
  }

  @Patch(":id/music")
  @ApiOkResponse({ type: PageResponseDto })
  async setPageMusic(
    @CurrentUserId() userId: string,
    @Param("id") id: string,
    @Body() data: PageMusicRequestDto,
  ): Promise<PageResponseDto> {
    return this.pageApplication.setPageMusic(userId, id, data.musicId ?? null);
  }

  @Get("couple/:coupleId/book")
  @ApiOkResponse({ type: PageBookResponseDto, isArray: true })
  async getBookByCoupleId(
    @CurrentUserId() userId: string,
    @Param("coupleId") coupleId: string,
  ): Promise<PageBookResponseDto[]> {
    return this.pageApplication.getBookByCoupleId(userId, coupleId);
  }

  @Get("couple/:coupleId")
  @ApiOkResponse({ type: PageResponseDto, isArray: true })
  async getPagesByCoupleId(
    @CurrentUserId() userId: string,
    @Param("coupleId") coupleId: string,
  ): Promise<PageResponseDto[]> {
    return this.pageApplication.getPagesByCoupleId(userId, coupleId);
  }
}
