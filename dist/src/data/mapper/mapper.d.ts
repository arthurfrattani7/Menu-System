import { MenuItem } from "../entity/menuItemsModel";
import { IMenuItem } from "./mapper.interface";
export declare class MapperRepository {
    menuItems(menuItems: IMenuItem): MenuItem;
}
