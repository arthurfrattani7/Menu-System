import { ApiProperty } from "@nestjs/swagger";
import { MusicResponseDto } from "./music.response.dto";
import { PageResponseDto } from "./page.response.dto";
import { PhotoResponseDto } from "./photo.response.dto";
import { VideoResponseDto } from "./video.response.dto";

export class PageBookResponseDto extends PageResponseDto {
  @ApiProperty({ type: MusicResponseDto, nullable: true })
  music: MusicResponseDto | null;

  @ApiProperty({ type: PhotoResponseDto, isArray: true })
  photos: PhotoResponseDto[];

  @ApiProperty({ type: VideoResponseDto, isArray: true })
  videos: VideoResponseDto[];
}
