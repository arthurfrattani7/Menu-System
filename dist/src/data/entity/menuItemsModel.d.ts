export declare class MenuItem {
    id: string;
    name: string;
    description?: string;
    price: number;
    available: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    constructor(props: Omit<MenuItem, "id">, id?: string);
}
