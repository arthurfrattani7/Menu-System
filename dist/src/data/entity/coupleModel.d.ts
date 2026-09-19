import { BaseModel } from "./baseModel";
import { z } from "zod";
export declare const CoupleSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userOneId: z.ZodOptional<z.ZodString>;
    userTwoId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare class Couple extends BaseModel {
    userOneId: string;
    userTwoId: string;
    createdAt: Date;
    constructor(props: Omit<Couple, "id">, id?: string, schemaShape?: z.ZodRawShape);
}
