import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { uploadOptions } from "../upload/upload.options";
import { MusicUploadRequestDto } from "../dto/request/music-upload.request.dto";
import { MusicApplication } from "../../application/applications/music.application";
import { CurrentUserId } from "../auth/current-user.decorator";
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

  @Post("upload")
  @ApiConsumes("multipart/form-data")
  @ApiBody({ type: MusicUploadRequestDto })
  @ApiCreatedResponse({ type: MusicResponseDto })
  @UseInterceptors(FileInterceptor("file", uploadOptions("music")))
  async uploadMusic(
    @CurrentUserId() userId: string,
    @Body() data: MusicUploadRequestDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<MusicResponseDto> {
    return this.musicApplication.uploadMusic(userId, data, file);
  }

  @Get(":id")
  @ApiOkResponse({ type: MusicResponseDto })
  async getMusicById(@Param("id") id: string): Promise<MusicResponseDto> {
    return this.musicApplication.getMusicById(id);
  }
}
