import { Injectable } from "@nestjs/common";
import { MusicRepository } from "../../data/repositories/db/musicRepository";
import { Music } from "../../data/entity/musicModel";

@Injectable()
export class MusicDomain {
  constructor(private readonly musicRepository: MusicRepository) {}

  async createMusic(music: Music): Promise<Music> {
    const createdMusic = await this.musicRepository.createMusic(music);
    return createdMusic;
  }

  async getMusicById(id: string): Promise<Music> {
    const music = await this.musicRepository.getMusicById(id);
    return music;
  }
}
