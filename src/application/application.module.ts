import { Module } from '@nestjs/common';
import { MenuItemsApplication } from './applications/menuItems.application';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [MenuItemsApplication],
  exports: [MenuItemsApplication],
})
export class ApplicationModule {}
