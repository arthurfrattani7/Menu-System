import { BaseModel } from "./baseModel";
import { z } from "zod";

export const VideoSchema = z
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

export class Video extends BaseModel {
  public url: string;
  public sortOrder: number;
  public pageId: string;
  public createdAt: Date;

  constructor(
    props: Omit<Video, "id">,
    id?: string,
    schemaShape?: z.ZodRawShape,
  ) {
    super(props, schemaShape || VideoSchema.shape, id);
  }
}
