import { MenuItemsDomain } from "../../domain/services/menuItems.domain";
import { IMenuItemsData } from "../interfaces/IMenuItems.application";
import { MenuItemsDto } from "../../presentation/response/menuItems/menuItems.dto";
export declare class MenuItemsApplication {
    private readonly menuItemDomain;
    constructor(menuItemDomain: MenuItemsDomain);
    saveMenuItem(menuItemData: IMenuItemsData): Promise<MenuItemsDto>;
    getAllMenuItems(): Promise<MenuItemsDto[]>;
    deleteMenuItem(id: string): Promise<void>;
    updateMenuItem(id: string, menuItemData: IMenuItemsData): Promise<MenuItemsDto>;
}
