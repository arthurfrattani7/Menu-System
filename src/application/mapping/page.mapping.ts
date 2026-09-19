import { Page } from "../../data/entity/pageModel";
import { PageResponseDto } from "../../presentation/dto/response/page.response.dto";

export function mapPageToPageMapperDto(dto: Page): PageResponseDto {
  return {
    id: dto.id,
    coupleId: dto.coupleId,
    order: dto.order,
    musicId: dto.musicId,
    createdAt: dto.createdAt,
  };
}
