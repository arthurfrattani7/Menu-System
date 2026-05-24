import { Module } from '@nestjs/common';
import { MenuItemsDomain } from './services/menuItems.domain';
import { DbModule } from '../data/data.module';
import { MenuDomain } from './services/menu.domain';

@Module({
  imports: [DbModule],
  providers: [MenuItemsDomain, MenuDomain],
  exports: [MenuItemsDomain, MenuDomain],
})
export class DomainModule {}