import { MenuItem } from "./menuItemsModel";
import { z } from "zod";

const Schema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    sent: z.boolean().default(false),
    customerId: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export class Menu {
  id: string;
  sent: boolean;
  customerId?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  items?: MenuItem[];

  constructor(props: Omit<Menu, "id">, id?: string) {
    this.id = id;
    Object.assign(this, props);
  }
}