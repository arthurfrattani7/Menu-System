import {
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
import { VideoApplication } from "../../application/applications/video.application";
import { CurrentUserId } from "../auth/current-user.decorator";
import { VideoResponseDto } from "../dto/response/video.response.dto";
import { uploadOptions } from "../upload/upload.options";

@Controller("page/:pageId/videos")
@ApiTags("Video")
export class VideoController {
  constructor(private readonly videoApplication: VideoApplication) {}

  @Post()
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: { file: { type: "string", format: "binary" } },
    },
  })
  @ApiCreatedResponse({ type: VideoResponseDto })
  @UseInterceptors(FileInterceptor("file", uploadOptions("videos")))
  async uploadVideo(
    @CurrentUserId() userId: string,
    @Param("pageId") pageId: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<VideoResponseDto> {
    return this.videoApplication.uploadVideo(userId, pageId, file);
  }

  @Get()
  @ApiOkResponse({ type: VideoResponseDto, isArray: true })
  async getVideos(
    @CurrentUserId() userId: string,
    @Param("pageId") pageId: string,
  ): Promise<VideoResponseDto[]> {
    return this.videoApplication.getVideosByPageId(userId, pageId);
  }
}
