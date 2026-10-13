import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { PhotoApplication } from "../../application/applications/photo.application";
import { CurrentUserId } from "../auth/current-user.decorator";
import { PhotoResponseDto } from "../dto/response/photo.response.dto";
import { uploadOptions } from "../upload/upload.options";

@Controller("page/:pageId/photos")
@ApiTags("Photo")
export class PhotoController {
  constructor(private readonly photoApplication: PhotoApplication) {}

  @Post()
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        files: { type: "array", items: { type: "string", format: "binary" } },
      },
    },
  })
  @ApiCreatedResponse({ type: PhotoResponseDto, isArray: true })
  @UseInterceptors(FilesInterceptor("files", 10, uploadOptions("photos")))
  async uploadPhotos(
    @CurrentUserId() userId: string,
    @Param("pageId") pageId: string,
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<PhotoResponseDto[]> {
    return this.photoApplication.uploadPhotos(userId, pageId, files);
  }

  @Get()
  @ApiOkResponse({ type: PhotoResponseDto, isArray: true })
  async getPhotos(
    @CurrentUserId() userId: string,
    @Param("pageId") pageId: string,
  ): Promise<PhotoResponseDto[]> {
    return this.photoApplication.getPhotosByPageId(userId, pageId);
  }
}
