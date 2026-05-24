import { MenuApplication } from "../../application/applications/menu.application";
import { MenuDto } from "../response/menuItems/menu.dto";
import { CreateMenuRequestDto } from "../request/menu.request.dto";
export declare class MenuController {
    private readonly menuApplication;
    constructor(menuApplication: MenuApplication);
    createMenu(body: CreateMenuRequestDto): Promise<MenuDto>;
}
