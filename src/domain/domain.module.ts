import { Module } from '@nestjs/common';
import { MenuItemsDomain } from './services/menuItems.domain';
import { DbModule } from '../data/data.module';

@Module({
  imports: [DbModule],
  providers: [MenuItemsDomain],
  exports: [MenuItemsDomain],
})
export class DomainModule {}