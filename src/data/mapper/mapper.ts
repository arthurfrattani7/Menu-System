import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { MenuItem } from "../entity/menuItemsModel";
import { IMenu, IMenuItem } from "./mapper.interface";
import { Menu } from "../entity/menuModel";

@Injectable()
export class MapperRepository {
  menuItems(menuItems: IMenuItem): MenuItem {
    if (!menuItems) return null;
    return new MenuItem(
      {
        name: menuItems.name,
        description: menuItems.description,
        price: menuItems.price.toNumber(),
        available: true,
        createdAt: menuItems.createdAt,
        updatedAt: menuItems.updatedAt,
      },
      menuItems.id,
    );
  }

  menu(menu: IMenu): Menu {
    if (!menu) return null;
    return new Menu(
      {
        name: menu.name,
        sent: menu.sent,
        customerId: menu.customerId,
        createdAt: menu.createdAt,
        updatedAt: menu.updatedAt,
        items: menu.items?.map((item) => this.menuItems(item)),
      },
      menu.id,
    );
  }
}
