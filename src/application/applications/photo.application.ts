import { Injectable } from "@nestjs/common";
import { BadRequestException } from "@nestjs/common/exceptions";
import { Photo } from "../../data/entity/photoModel";
import { StorageService } from "../../data/providers/storage/storage.service";
import { CoupleAccess } from "../authorization/couple-access";
import { PhotoDomain } from "../../domain/services/photoDomain";
import { PhotoResponseDto } from "../../presentation/dto/response/photo.response.dto";
import { mapPhotoToPhotoMapperDto } from "../mapping/photo.mapping";

@Injectable()
export class PhotoApplication {
  constructor(
    private readonly photoDomain: PhotoDomain,
    private readonly coupleAccess: CoupleAccess,
    private readonly storage: StorageService,
  ) {}

  async uploadPhotos(
    userId: string,
    pageId: string,
    files: Express.Multer.File[],
  ): Promise<PhotoResponseDto[]> {
    try {
      if (!files || files.length === 0) {
        throw new BadRequestException("Nenhuma foto enviada");
      }

      await this.coupleAccess.assertCanAccessPage(userId, pageId);

      let sortOrder = await this.photoDomain.getNextSortOrder(pageId);
      const created: PhotoResponseDto[] = [];

      for (const file of files) {
        const photo = new Photo({
          url: this.storage.getPublicUrl("photos", file.filename),
          sortOrder: sortOrder++,
          pageId: pageId,
          createdAt: new Date(),
        });
        const createdPhoto = await this.photoDomain.createPhoto(photo);
        created.push(mapPhotoToPhotoMapperDto(createdPhoto));
      }

      return created;
    } catch (error) {
      await Promise.all((files ?? []).map((f) => this.storage.deleteFile(f)));
      throw error;
    }
  }

  async getPhotosByPageId(
    userId: string,
    pageId: string,
  ): Promise<PhotoResponseDto[]> {
    await this.coupleAccess.assertCanAccessPage(userId, pageId);
    const photos = await this.photoDomain.getPhotosByPageId(pageId);
    return photos.map(mapPhotoToPhotoMapperDto);
  }
}
