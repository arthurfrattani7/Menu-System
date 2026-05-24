import { Injectable } from "@nestjs/common";
import { MenuItemsDomain } from "../../domain/services/menuItems.domain";
import { IMenuItemsData } from "../interfaces/IMenuItems.application";
import { MenuItemsDto } from "../../presentation/response/menuItems/menuItems.dto";
import { MenuItem } from "../../data/entity/menuItemsModel";
import { mapMenuItemToDto } from "../mapping/menuItems.mapping";

@Injectable()
export class MenuItemsApplication {
  constructor(private readonly menuItemDomain: MenuItemsDomain) {}

  async saveMenuItem(menuItemData: IMenuItemsData): Promise<MenuItemsDto> {
    const menuItem = new MenuItem({
      name: menuItemData.name,
      description: menuItemData.description,
      price: menuItemData.price,
      available: true,
      createdAt: menuItemData.createdAt,
      updatedAt: menuItemData.updatedAt,
    });

    const createdMenuItem = await this.menuItemDomain.saveMenuItem(menuItem);

    return mapMenuItemToDto(createdMenuItem);
  }

  async getAllMenuItems(): Promise<MenuItemsDto[]> {
    const menuItems = await this.menuItemDomain.getAllMenuItems();
    return menuItems.map(mapMenuItemToDto);
  }

  async deleteMenuItem(id: string): Promise<void> {
    await this.menuItemDomain.deleteMenuItem(id);
  }

  async updateMenuItem(
    id: string,
    menuItemData: IMenuItemsData,
  ): Promise<MenuItemsDto> {
    const menuItem = new MenuItem({
      name: menuItemData.name,
      description: menuItemData.description,
      price: menuItemData.price,
      available: true,
      createdAt: menuItemData.createdAt,
      updatedAt: menuItemData.updatedAt,
    });
    const updatedMenuItem = await this.menuItemDomain.updateMenuItem(
      id,
      menuItem,
    );
    return mapMenuItemToDto(updatedMenuItem);
  }
}
