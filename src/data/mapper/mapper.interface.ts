import { Decimal } from "@prisma/client/runtime/client";

export type IMenuItem = {
  id?: string;
  name: string;
  description?: string;
  price: Decimal;
  createdAt?: Date;
  updatedAt?: Date;
};

export type IMenu = {
  id?: string;
  name: string;
  sent: boolean;
  customerId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  items?: IMenuItem[];
};
