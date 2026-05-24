import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { MenuItem } from "../entity/menuItemsModel";
import { IMenuItem } from "./mapper.interface";

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
}
