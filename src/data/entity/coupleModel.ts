import { BaseModel } from "./baseModel";
import { z } from "zod";

export const CoupleSchema = z
  .object({
    id: z.string().uuid(),
    userOneId: z.string().uuid(),
    userTwoId: z.string().uuid(),
    createdAt: z.date(),
  })
  .partial({
    id: true,
    userOneId: true,
    userTwoId: true,
    createdAt: true,
  });

export class Couple extends BaseModel {
  public userOneId: string;
  public userTwoId: string;
  public createdAt: Date;

  constructor(
    props: Omit<Couple, "id">,
    id?: string,
    schemaShape?: z.ZodRawShape,
  ) {
    super(props, schemaShape || CoupleSchema.shape, id);
  }
}
