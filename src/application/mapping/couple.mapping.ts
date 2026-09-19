import { Couple } from "../../data/entity/coupleModel";
import { CoupleResponseDto } from "../../presentation/dto/response/couple.response.dto";

export function mapCoupleToCoupleMapperDto(dto: Couple): CoupleResponseDto {
  return {
    id: dto.id,
    userOneId: dto.userOneId,
    userTwoId: dto.userTwoId,
    createdAt: dto.createdAt,
  };
}
