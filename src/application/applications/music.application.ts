import { Injectable } from "@nestjs/common";
import { MusicDomain } from "../../domain/services/musicDomain";
import { Music } from "../../data/entity/musicModel";
import { IRegisterMusicApplication } from "../interfaces/IRegisterMusic.application";
import { MusicResponseDto } from "../../presentation/dto/response/music.response.dto";
import { mapMusicToMusicMapperDto } from "../mapping/music.mapping";
import { BadRequestException } from "@nestjs/common/exceptions";

@Injectable()
export class MusicApplication {
  constructor(private readonly musicDomain: MusicDomain) {}

  async createMusic(
    data: IRegisterMusicApplication,
  ): Promise<MusicResponseDto> {
    const music = new Music({
      name: data.name,
      artist: data.artist,
      url: data.url,
      createdAt: new Date(),
    });
    const createdMusic = await this.musicDomain.createMusic(music);
    return mapMusicToMusicMapperDto(createdMusic);
  }

  async getMusicById(id: string): Promise<MusicResponseDto> {
    if (!id) {
      throw new BadRequestException("ID Não Encontrado");
    }
    const music = await this.musicDomain.getMusicById(id);
    return mapMusicToMusicMapperDto(music);
  }
}
