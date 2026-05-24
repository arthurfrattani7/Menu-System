import { IMenuData } from "../interfaces/IMenu.application";
import { MenuDto } from "../../presentation/response/menuItems/menu.dto";

export const mapMenuToDto = (menu: IMenuData): MenuDto => {
  return {
    id: menu.id,
    name: menu.name,
    sent: menu.sent,
    customerId: menu.customerId,
    createdAt: menu.createdAt,
    updatedAt: menu.updatedAt,
  };
}