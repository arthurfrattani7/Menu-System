import { BaseModel } from "./baseModel";
import { z } from "zod";

export const PageSchema = z
  .object({
    id: z.string().uuid(),
    coupleId: z.string().uuid(),
    order: z.number().int(),
    musicId: z.string().uuid().nullable(),
    createdAt: z.date(),
  })
  .partial({
    id: true,
    coupleId: true,
    order: true,
    musicId: true,
    createdAt: true,
  });

export class Page extends BaseModel {
  public coupleId: string;
  public order: number;
  public musicId: string | null;
  public createdAt: Date;

  constructor(
    props: Omit<Page, "id">,
    id?: string,
    schemaShape?: z.ZodRawShape,
  ) {
    super(props, schemaShape || PageSchema.shape, id);
  }
}
