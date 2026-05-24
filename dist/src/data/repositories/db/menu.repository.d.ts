import { PrismaService } from "../../providers/db/prisma.service";
import { MapperRepository } from "../../mapper/mapper";
import { Menu } from "../../entity/menuModel";
export declare class MenuRepository {
    private readonly db;
    private readonly mapper;
    constructor(db: PrismaService, mapper: MapperRepository);
    createMenu(menu: Menu): Promise<Menu>;
    addItemsToMenu(menuId: string, itemIds: string[]): Promise<Menu>;
}
