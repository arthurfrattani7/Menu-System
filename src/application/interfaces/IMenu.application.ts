import { IMenuItemsData } from "./IMenuItems.application";
export interface IMenuData {
  id?: string;
  name: string;
  sent: boolean;
  customerId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  items?: IMenuItemsData[];
}
