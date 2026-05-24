import { Module } from '@nestjs/common';
import { MenuItemsController } from './controllers/menuItems.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
 imports: [ApplicationModule],
  controllers: [
    MenuItemsController,
  ],
})
export class PresentationModule {}