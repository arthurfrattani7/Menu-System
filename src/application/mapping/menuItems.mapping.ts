import { IMenuItemsData } from '../interfaces/IMenuItems.application';
import { MenuItemsDto } from '../../presentation/response/menuItems/menuItems.dto';

export const mapMenuItemToDto = (menuItem: IMenuItemsData): MenuItemsDto => {
    return {
        id: menuItem.id,
        name: menuItem.name,
        description: menuItem.description,
        price: menuItem.price,
        createdAt: menuItem.createdAt,
        updatedAt: menuItem.updatedAt,
    };
}