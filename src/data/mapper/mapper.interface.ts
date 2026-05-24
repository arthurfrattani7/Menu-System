import { Decimal } from "@prisma/client/runtime/client";

export type IMenuItem = {
  id?: string;
  name: string;
  description?: string;
  price: Decimal;
  createdAt?: Date;
  updatedAt?: Date;
};
