import { PrismaService } from "../../providers/db/prisma.service";
import { MapperRepository } from "../../mapper/mapper";
import { MenuItem } from "../../entity/menuItemsModel";
export declare class MenuItemRepository {
    private readonly db;
    private readonly mapper;
    constructor(db: PrismaService, mapper: MapperRepository);
    createMenuItem(menuItem: MenuItem): Promise<MenuItem>;
    findAllMenuItems(): Promise<MenuItem[]>;
    deleteMenuItem(id: string): Promise<void>;
    updateMenuItem(id: string, menuItem: MenuItem): Promise<MenuItem>;
}
