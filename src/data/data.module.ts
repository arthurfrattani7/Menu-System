import { Module, Global } from '@nestjs/common';
import { PrismaService } from './providers/db/prisma.service';
import { MapperRepositoryModule } from './mapper/mapper.module';
import { UserRepository } from './repositories/db/userRepository';
import { CoupleRepository } from './repositories/db/coupleRepository';

@Global()
@Module({
  imports: [MapperRepositoryModule],
  providers: [PrismaService, UserRepository, CoupleRepository],
  exports: [PrismaService, UserRepository, CoupleRepository],
})
export class DbModule {}