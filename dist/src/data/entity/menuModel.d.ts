import { MenuItem } from "./menuItemsModel";
export declare class Menu {
    id: string;
    sent: boolean;
    customerId?: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    items?: MenuItem[];
    constructor(props: Omit<Menu, "id">, id?: string);
}
