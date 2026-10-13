import { Video } from "../../data/entity/videoModel";
import { VideoResponseDto } from "../../presentation/dto/response/video.response.dto";

export function mapVideoToVideoMapperDto(dto: Video): VideoResponseDto {
  return {
    id: dto.id,
    url: dto.url,
    sortOrder: dto.sortOrder,
    pageId: dto.pageId,
    createdAt: dto.createdAt,
  };
}
