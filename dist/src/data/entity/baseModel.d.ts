import { BaseClass } from '../../crossCutting/objects/baseClass';
import { ZodRawShape } from 'zod';
export declare class BaseModel<T = unknown> extends BaseClass<T> {
    readonly id: string;
    constructor(props: T, schemaShape: ZodRawShape, id?: string);
}
