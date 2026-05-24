import { z } from "zod";

const Schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string().optional().nullable(),
  price: z.number().positive("O preço deve ser maior que zero"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export class MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  available: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props: Omit<MenuItem, "id">, id?: string) {
    this.id = id;
    Object.assign(this, props);
  }
}
