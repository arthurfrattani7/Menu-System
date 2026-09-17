import { Module, Global } from '@nestjs/common';
import { PrismaService } from './providers/db/prisma.service';
import { MapperRepositoryModule } from './mapper/mapper.module';
import { UserRepository } from './repositories/db/userRepository';

@Global()
@Module({
  imports: [MapperRepositoryModule],
  providers: [PrismaService, UserRepository],
  exports: [PrismaService, UserRepository],
})
export class DbModule {}