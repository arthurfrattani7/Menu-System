import { Module, Global } from '@nestjs/common';
import { PrismaService } from './providers/db/prisma.service';
import { MapperRepositoryModule } from './mapper/mapper.module';
import { UserRepository } from './repositories/db/userRepository';
import { CoupleRepository } from './repositories/db/coupleRepository';
import { MusicRepository } from './repositories/db/musicRepository';

@Global()
@Module({
  imports: [MapperRepositoryModule],
  providers: [PrismaService, UserRepository, CoupleRepository, MusicRepository],
  exports: [PrismaService, UserRepository, CoupleRepository, MusicRepository],
})
export class DbModule {}