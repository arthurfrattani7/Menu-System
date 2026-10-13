import { Module, Global } from '@nestjs/common';
import { PrismaService } from './providers/db/prisma.service';
import { MapperRepositoryModule } from './mapper/mapper.module';
import { UserRepository } from './repositories/db/userRepository';
import { CoupleRepository } from './repositories/db/coupleRepository';
import { MusicRepository } from './repositories/db/musicRepository';
import { PageRepository } from './repositories/db/pageRepository';
import { PhotoRepository } from './repositories/db/photoRepository';
import { VideoRepository } from './repositories/db/videoRepository';
import { StorageService } from './providers/storage/storage.service';

@Global()
@Module({
  imports: [MapperRepositoryModule],
  providers: [
    PrismaService,
    UserRepository,
    CoupleRepository,
    MusicRepository,
    PageRepository,
    PhotoRepository,
    VideoRepository,
    StorageService,
  ],
  exports: [
    PrismaService,
    UserRepository,
    CoupleRepository,
    MusicRepository,
    PageRepository,
    PhotoRepository,
    VideoRepository,
    StorageService,
  ],
})
export class DbModule {}