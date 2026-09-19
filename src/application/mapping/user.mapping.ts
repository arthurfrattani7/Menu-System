import { User } from "../../data/entity/userModel";
import { UserResponseDto } from "../../presentation/dto/response/user.response.dto";

export function mapUserToUserMapperDto(dto: User): UserResponseDto {
  return {
    id: dto.id,
    email: dto.email,
    name: dto.name,
    createdAt: dto.createdAt,
  };
}