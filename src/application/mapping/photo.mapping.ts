import { Photo } from "../../data/entity/photoModel";
import { PhotoResponseDto } from "../../presentation/dto/response/photo.response.dto";

export function mapPhotoToPhotoMapperDto(dto: Photo): PhotoResponseDto {
  return {
    id: dto.id,
    url: dto.url,
    sortOrder: dto.sortOrder,
    pageId: dto.pageId,
    createdAt: dto.createdAt,
  };
}
