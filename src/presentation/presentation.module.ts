import { Module } from '@nestjs/common';
import { MenuItemsController } from './controllers/menuItems.controller';
import { ApplicationModule } from '../application/application.module';
import { MenuController } from './controllers/menu.controller';

@Module({
 imports: [ApplicationModule],
  controllers: [
    MenuItemsController,
    MenuController,
  ],
})
export class PresentationModule {}