import { Injectable } from "@nestjs/common";
import { MenuItemRepository } from "../../data/repositories/db/menuItems.repository";
import { MenuItem } from "../../data/entity/menuItemsModel";

@Injectable()
export class MenuItemsDomain {
  constructor(private readonly menuItemRepository: MenuItemRepository) {}

  async saveMenuItem(menuItem: MenuItem): Promise<MenuItem> {
    return this.menuItemRepository.createMenuItem(menuItem);
  }

  async getAllMenuItems(): Promise<MenuItem[]> {
    return this.menuItemRepository.findAllMenuItems();
  }

  async deleteMenuItem(id: string): Promise<void> {
    await this.menuItemRepository.deleteMenuItem(id);
  }

  async updateMenuItem(id: string, menuItem: MenuItem): Promise<MenuItem> {
    return this.menuItemRepository.updateMenuItem(id, menuItem);
  }
}
