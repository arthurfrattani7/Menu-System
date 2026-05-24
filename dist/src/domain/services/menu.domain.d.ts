import { MenuRepository } from "../../data/repositories/db/menu.repository";
import { Menu } from "../../data/entity/menuModel";
export declare class MenuDomain {
    private readonly menuRepository;
    constructor(menuRepository: MenuRepository);
    saveMenu(menu: Menu): Promise<Menu>;
    addItemsToMenu(menuId: string, itemIds: string[]): Promise<Menu>;
}
