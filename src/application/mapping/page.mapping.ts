import { Page } from "../../data/entity/pageModel";
import { PageResponseDto } from "../../presentation/dto/response/page.response.dto";
import { PageBook } from "../../data/entity/pageBookModel";
import { PageBookResponseDto } from "../../presentation/dto/response/page-book.response.dto";
import { mapMusicToMusicMapperDto } from "./music.mapping";
import { mapPhotoToPhotoMapperDto } from "./photo.mapping";
import { mapVideoToVideoMapperDto } from "./video.mapping";

export function mapPageBookToPageBookDto(book: PageBook): PageBookResponseDto {
  return {
    ...mapPageToPageMapperDto(book.page),
    music: book.music ? mapMusicToMusicMapperDto(book.music) : null,
    photos: book.photos.map(mapPhotoToPhotoMapperDto),
    videos: book.videos.map(mapVideoToVideoMapperDto),
  };
}

export function mapPageToPageMapperDto(dto: Page): PageResponseDto {
  return {
    id: dto.id,
    coupleId: dto.coupleId,
    order: dto.order,
    musicId: dto.musicId,
    durationSeconds: dto.durationSeconds,
    musicStartSeconds: dto.musicStartSeconds,
    createdAt: dto.createdAt,
  };
}
