import { Injectable } from "@nestjs/common";
import { MenuDomain } from "../../domain/services/menu.domain";
import { IMenuData } from "../interfaces/IMenu.application";
import { MenuDto } from "../../presentation/response/menuItems/menu.dto";
import { Menu } from "../../data/entity/menuModel";
import { mapMenuToDto } from "../mapping/manu.mapping";
import { MenuWithItemsDto } from "../../presentation/response/menuItems/menuWithItems.dto";
import { mapMenuToWithItemsDto } from "../mapping/menuWithItems.mapping";

@Injectable()
export class MenuApplication {
  constructor(private readonly menuDomain: MenuDomain) {}

  async saveMenu(menuData: IMenuData): Promise<MenuDto> {
    const menu = new Menu({
      name: menuData.name,
      customerId: menuData.customerId,
      sent: menuData.sent,
      createdAt: menuData.createdAt,
      updatedAt: menuData.updatedAt,
    });

    const createdMenu = await this.menuDomain.saveMenu(menu);

    return mapMenuToDto(createdMenu);
  }

  async addItemsToMenu(menuId: string, itemIds: string[]): Promise<MenuWithItemsDto> {
    const updatedMenu = await this.menuDomain.addItemsToMenu(menuId, itemIds);
    return mapMenuToWithItemsDto(updatedMenu);
  }
}
