import { BaseModel } from "./baseModel";
import { z } from "zod";

export const PhotoSchema = z
  .object({
    id: z.string().uuid(),
    url: z.string().url(),
    sortOrder: z.number().int(),
    pageId: z.string().uuid(),
    createdAt: z.date(),
  })
  .partial({
    id: true,
    url: true,
    sortOrder: true,
    pageId: true,
    createdAt: true,
  });

export class Photo extends BaseModel {
  public url: string;
  public sortOrder: number;
  public pageId: string;
  public createdAt: Date;

  constructor(
    props: Omit<Photo, "id">,
    id?: string,
    schemaShape?: z.ZodRawShape,
  ) {
    super(props, schemaShape || PhotoSchema.shape, id);
  }
}
