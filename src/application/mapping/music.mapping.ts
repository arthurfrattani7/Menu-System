import { Music } from "../../data/entity/musicModel";
import { MusicResponseDto } from "../../presentation/dto/response/music.response.dto";

export function mapMusicToMusicMapperDto(dto: Music): MusicResponseDto {
  return {
    id: dto.id,
    name: dto.name,
    artist: dto.artist,
    url: dto.url,
    createdAt: dto.createdAt,
  };
}
