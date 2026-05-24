import { MenuWithItemsDto } from '../../presentation/response/menuItems/menuWithItems.dto';
import { Menu } from '../../data/entity/menuModel';

export function mapMenuToWithItemsDto(menu: Menu): MenuWithItemsDto {
  return {
    id: menu.id,
    name: menu.name,
    customerId: menu.customerId,
    sent: menu.sent,
    createdAt: menu.createdAt,
    items: menu.items
      ? menu.items.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: Number(item.price), 
          available: item.available,
          createdAt: item.createdAt,
        }))
      : [],
  };
}