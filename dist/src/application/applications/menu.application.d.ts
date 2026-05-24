import { MenuDomain } from "../../domain/services/menu.domain";
import { IMenuData } from "../interfaces/IMenu.application";
import { MenuDto } from "../../presentation/response/menuItems/menu.dto";
import { MenuWithItemsDto } from "../../presentation/response/menuItems/menuWithItems.dto";
export declare class MenuApplication {
    private readonly menuDomain;
    constructor(menuDomain: MenuDomain);
    saveMenu(menuData: IMenuData): Promise<MenuDto>;
    addItemsToMenu(menuId: string, itemIds: string[]): Promise<MenuWithItemsDto>;
}
