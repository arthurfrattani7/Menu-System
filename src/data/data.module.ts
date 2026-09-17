import { Module, Global } from '@nestjs/common';
import { PrismaService } from './providers/db/prisma.service';
import { MapperRepositoryModule } from './mapper/mapper.module';

@Global()
@Module({
  imports: [MapperRepositoryModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DbModule {}