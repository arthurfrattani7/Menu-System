import { ZodTypeAny } from 'zod';
export declare class BaseClass<P = unknown> {
    constructor(props: P, schema: ZodTypeAny);
}
