import { MenuItemRepository } from "../../data/repositories/db/menuItems.repository";
import { MenuItem } from "../../data/entity/menuItemsModel";
export declare class MenuItemsDomain {
    private readonly menuItemRepository;
    constructor(menuItemRepository: MenuItemRepository);
    saveMenuItem(menuItem: MenuItem): Promise<MenuItem>;
    getAllMenuItems(): Promise<MenuItem[]>;
    deleteMenuItem(id: string): Promise<void>;
    updateMenuItem(id: string, menuItem: MenuItem): Promise<MenuItem>;
}
