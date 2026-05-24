import { MenuItem } from "../entity/menuItemsModel";
import { IMenu, IMenuItem } from "./mapper.interface";
import { Menu } from "../entity/menuModel";
export declare class MapperRepository {
    menuItems(menuItems: IMenuItem): MenuItem;
    menu(menu: IMenu): Menu;
}
