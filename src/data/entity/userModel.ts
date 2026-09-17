import { BaseModel } from "./baseModel";
import { z } from "zod";

export const UserSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string().min(2).max(100),
    email: z.string().email(),
    password: z.string().min(1),
    createdAt: z.date(),
  })
  .partial({
    id: true,
    name: true,
    email: true,
    password: true,
    createdAt: true,
  });

export class User extends BaseModel {
  public name: string;
  public email: string;
  public password: string;
  public createdAt: Date;

  constructor(
    props: Omit<User, "id">,
    id?: string,
    schemaShape?: z.ZodRawShape,
  ) {
    super(props, schemaShape || UserSchema.shape, id);
  }
}
