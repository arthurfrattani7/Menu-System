import { Module } from '@nestjs/common';
import { MenuItemsApplication } from './applications/menuItems.application';
import { DomainModule } from '../domain/domain.module';
import { MenuApplication } from './applications/menu.application';

@Module({
  imports: [DomainModule],
  providers: [MenuItemsApplication, MenuApplication],
  exports: [MenuItemsApplication, MenuApplication],
})
export class ApplicationModule {}
