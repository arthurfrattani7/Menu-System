import { MenuItemsApplication } from "../../application/applications/menuItems.application";
import { MenuItemsDto } from "../response/menuItems/menuItems.dto";
import { CreateMenuItemRequestDto } from "../request/menuItems.request.dto";
export declare class MenuItemsController {
    private readonly menuItemsApplication;
    constructor(menuItemsApplication: MenuItemsApplication);
    createMenuItem(body: CreateMenuItemRequestDto): Promise<MenuItemsDto>;
    getAllMenuItems(): Promise<MenuItemsDto[]>;
    deleteMenuItem(id: string): Promise<void>;
    updateMenuItem(id: string, body: CreateMenuItemRequestDto): Promise<MenuItemsDto>;
}
