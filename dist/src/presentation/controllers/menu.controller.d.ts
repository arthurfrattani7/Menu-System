import { MenuApplication } from "../../application/applications/menu.application";
import { MenuDto } from "../response/menuItems/menu.dto";
import { CreateMenuRequestDto } from "../request/menu.request.dto";
import { AddItemsToMenuDto } from "../request/addItemsToMenu.request.dto";
import { MenuWithItemsDto } from "../response/menuItems/menuWithItems.dto";
export declare class MenuController {
    private readonly menuApplication;
    constructor(menuApplication: MenuApplication);
    createMenu(body: CreateMenuRequestDto): Promise<MenuDto>;
    addItems(id: string, body: AddItemsToMenuDto): Promise<MenuWithItemsDto>;
}
