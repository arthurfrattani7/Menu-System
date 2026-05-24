import { Module, Global } from '@nestjs/common';
import { PrismaService } from './providers/db/prisma.service';
import { MenuItemRepository } from './repositories/db/menuItems.repository';
import { MapperRepositoryModule } from './mapper/mapper.module';
import { MenuRepository } from './repositories/db/menu.repository';

@Global()
@Module({
  imports: [MapperRepositoryModule],
  providers: [PrismaService, MenuItemRepository, MenuRepository],
  exports: [PrismaService, MenuItemRepository, MenuRepository],
})
export class DbModule {}