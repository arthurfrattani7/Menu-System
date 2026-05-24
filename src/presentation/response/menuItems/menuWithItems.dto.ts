import { ApiProperty } from '@nestjs/swagger';
import { MenuDto } from './menu.dto';
import { MenuItemsDto } from './menuItems.dto';

export class MenuWithItemsDto extends MenuDto {
  @ApiProperty({
    type: [MenuItemsDto],
    description: 'Lista de bebidas detalhadas vinculadas a este cardápio específico',
  })
  items: MenuItemsDto[];
}