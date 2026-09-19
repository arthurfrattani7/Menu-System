import { Injectable } from "@nestjs/common";
import { MapperRepository } from "../../mapper/mapper";
import { PrismaService } from "../../providers/db/prisma.service";
import { Music } from "../../entity/musicModel";

@Injectable()
export class MusicRepository {
  constructor(
    private readonly mapper: MapperRepository,
    private readonly db: PrismaService,
  ) {}

  async createMusic(music: Music): Promise<Music> {
    const createdMusic = await this.db.music.create({
      data: {
        id: music.id,
        name: music.name,
        artist: music.artist,
        url: music.url,
        createdAt: music.createdAt,
      },
    });
    return this.mapper.music(createdMusic);
  }

  async getMusicById(id: string): Promise<Music> {
    const music = await this.db.music.findUnique({
      where: {
        id: id,
      },
    });
    return this.mapper.music(music);
  }
}
