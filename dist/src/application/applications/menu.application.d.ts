import { MenuDomain } from "../../domain/services/menu.domain";
import { IMenuData } from "../interfaces/IMenu.application";
import { MenuDto } from "../../presentation/response/menuItems/menu.dto";
export declare class MenuApplication {
    private readonly menuDomain;
    constructor(menuDomain: MenuDomain);
    saveMenu(menuData: IMenuData): Promise<MenuDto>;
}
