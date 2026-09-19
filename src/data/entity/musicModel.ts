import { BaseModel } from "./baseModel";
import { z } from "zod";

export const MusicSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string().min(2).max(100),
    artist: z.string().min(2).max(100),
    url: z.string().url(),
    createdAt: z.date(),
  })
  .partial({
    id: true,
    name: true,
    artist: true,
    url: true,
    createdAt: true,
  });

export class Music extends BaseModel {
  public name: string;
  public artist: string;
  public url: string;
  public createdAt: Date;

  constructor(
    props: Omit<Music, "id">,
    id?: string,
    schemaShape?: z.ZodRawShape,
  ) {
    super(props, schemaShape || MusicSchema.shape, id);
  }
}
