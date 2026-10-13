import { Injectable } from "@nestjs/common";
import { PhotoRepository } from "../../data/repositories/db/photoRepository";
import { Photo } from "../../data/entity/photoModel";

@Injectable()
export class PhotoDomain {
  constructor(private readonly photoRepository: PhotoRepository) {}

  async getNextSortOrder(pageId: string): Promise<number> {
    return this.photoRepository.getNextSortOrder(pageId);
  }

  async createPhoto(photo: Photo): Promise<Photo> {
    return this.photoRepository.createPhoto(photo);
  }

  async getPhotosByPageId(pageId: string): Promise<Photo[]> {
    return this.photoRepository.getPhotosByPageId(pageId);
  }
}
