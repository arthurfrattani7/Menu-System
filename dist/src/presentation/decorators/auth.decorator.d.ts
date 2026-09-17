export declare const ROLES_KEY = "roles";
export declare function Auth(...roles: string[]): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
