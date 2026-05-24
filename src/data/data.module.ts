import { Module, Global } from '@nestjs/common';
import { PrismaService } from './providers/db/prisma.service';
import { MenuItemRepository } from './repositories/db/menuItems.repository';
import { MapperRepositoryModule } from './mapper/mapper.module';

@Global()
@Module({
  imports: [MapperRepositoryModule],
  providers: [PrismaService, MenuItemRepository],
  exports: [PrismaService, MenuItemRepository],
})
export class DbModule {}