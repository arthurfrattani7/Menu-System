import { BaseModel } from "./baseModel";
import { z } from "zod";
export declare const UserSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare class User extends BaseModel {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    constructor(props: Omit<User, "id">, id?: string, schemaShape?: z.ZodRawShape);
}
