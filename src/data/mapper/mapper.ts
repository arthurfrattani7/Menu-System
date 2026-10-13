import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { User } from "../entity/userModel";
import { Couple } from "../entity/coupleModel";
import {
  CoupleMapperI,
  MusicMapperI,
  PageMapperI,
  PhotoMapperI,
  UserMapperI,
  VideoMapperI,
} from "./mapper.interface";
import { Music } from "../entity/musicModel";
import { Page } from "../entity/pageModel";
import { Photo } from "../entity/photoModel";
import { Video } from "../entity/videoModel";

@Injectable()
export class MapperRepository {
    user(user: UserMapperI | null): User | null {
        if (!user) {
            return null;
        }

        return new User(
            {
                name: user.name,
                email: user.email,
                password: user.password,
                createdAt: user.createdAt,
            },
            user.id,
        );
    }

    couple(couple: CoupleMapperI | null): Couple | null {
        if (!couple) {
            return null;
        }

        return new Couple(
            {
                userOneId: couple.userOneId,
                userTwoId: couple.userTwoId,
                createdAt: couple.createdAt,
            },
            couple.id,
        );
    }

    music(music: MusicMapperI | null): Music | null {
        if (!music) {
            return null;
        }

        return new Music(
            {
                name: music.name,
                artist: music.artist,
                url: music.url,
                createdAt: music.createdAt,
            },
            music.id,
        );
    }

    page(page: PageMapperI | null): Page | null {
        if (!page) {
            return null;
        }

        return new Page(
            {
                coupleId: page.coupleId,
                order: page.order,
                musicId: page.musicId,
                durationSeconds: page.durationSeconds,
                musicStartSeconds: page.musicStartSeconds,
                createdAt: page.createdAt,
            },
            page.id,
        );
    }

    photo(photo: PhotoMapperI): Photo {
        return new Photo(
            {
                url: photo.url,
                sortOrder: photo.sortOrder,
                pageId: photo.pageId,
                createdAt: photo.createdAt,
            },
            photo.id,
        );
    }

    video(video: VideoMapperI): Video {
        return new Video(
            {
                url: video.url,
                sortOrder: video.sortOrder,
                pageId: video.pageId,
                createdAt: video.createdAt,
            },
            video.id,
        );
    }
}
