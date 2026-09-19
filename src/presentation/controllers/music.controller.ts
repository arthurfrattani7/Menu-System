import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { MusicApplication } from "../../application/applications/music.application";
import { MusicRequestDto } from "../dto/request/music.request.dto";
import { MusicResponseDto } from "../dto/response/music.response.dto";

@Controller("music")
@ApiTags("Music")
export class MusicController {
  constructor(private readonly musicApplication: MusicApplication) {}

  @Post()
  @ApiCreatedResponse({ type: MusicResponseDto })
  async createMusic(
    @Body() data: MusicRequestDto,
  ): Promise<MusicResponseDto> {
    return this.musicApplication.createMusic(data);
  }

  @Get(":id")
  @ApiOkResponse({ type: MusicResponseDto })
  async getMusicById(@Param("id") id: string): Promise<MusicResponseDto> {
    return this.musicApplication.getMusicById(id);
  }
}
