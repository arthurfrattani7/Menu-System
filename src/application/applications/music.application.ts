import { Injectable } from "@nestjs/common";
import { MusicDomain } from "../../domain/services/musicDomain";
import { Music } from "../../data/entity/musicModel";
import { IRegisterMusicApplication } from "../interfaces/IRegisterMusic.application";
import { MusicResponseDto } from "../../presentation/dto/response/music.response.dto";
import { mapMusicToMusicMapperDto } from "../mapping/music.mapping";
import {
  BadRequestException,
  NotFoundException,
} from "@nestjs/common/exceptions";
import { StorageService } from "../../data/providers/storage/storage.service";
import { PageDomain } from "../../domain/services/pageDomain";
import { CoupleAccess } from "../authorization/couple-access";
import { IUploadMusicApplication } from "../interfaces/IUploadMusic.application";

@Injectable()
export class MusicApplication {
  constructor(
    private readonly musicDomain: MusicDomain,
    private readonly pageDomain: PageDomain,
    private readonly coupleAccess: CoupleAccess,
    private readonly storage: StorageService,
  ) {}

  async uploadMusic(
    userId: string,
    data: IUploadMusicApplication,
    file: Express.Multer.File,
  ): Promise<MusicResponseDto> {
    try {
      if (!file) {
        throw new BadRequestException("Nenhum arquivo de música enviado");
      }

      if (data.pageId) {
        await this.coupleAccess.assertCanAccessPage(userId, data.pageId);
      }

      const music = new Music({
        name: data.name,
        artist: data.artist,
        url: this.storage.getPublicUrl("music", file.filename),
        createdAt: new Date(),
      });
      const createdMusic = await this.musicDomain.createMusic(music);

      if (data.pageId) {
        await this.pageDomain.updatePageMusic(data.pageId, createdMusic.id);
      }

      return mapMusicToMusicMapperDto(createdMusic);
    } catch (error) {
      if (file) {
        await this.storage.deleteFile(file);
      }
      throw error;
    }
  }

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
    if (!music) {
      throw new NotFoundException("Música não encontrada");
    }
    return mapMusicToMusicMapperDto(music);
  }
}
