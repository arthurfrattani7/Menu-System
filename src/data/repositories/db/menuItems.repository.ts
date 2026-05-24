import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../providers/db/prisma.service";
import { MapperRepository } from "../../mapper/mapper";
import { MenuItem } from "../../entity/menuItemsModel";

@Injectable()
export class MenuItemRepository {
  constructor(
    private readonly db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async createMenuItem(menuItem: MenuItem): Promise<MenuItem> {
    const menuItemDB = await this.db.menuItem.create({
      data: {
        name: menuItem.name,
        description: menuItem.description,
        price: menuItem.price,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        available: true,
        createdAt: true,
      },
    });

    return this.mapper.menuItems(menuItemDB);
  }

  async findAllMenuItems(): Promise<MenuItem[]> {
    const results = await this.db.menuItem.findMany({
      orderBy: { createdAt: "desc" },
    });

    return results.map((result) => this.mapper.menuItems(result));
  }

  async deleteMenuItem(id: string): Promise<void> {
    await this.db.menuItem.delete({
      where: { id },
    });
  }

  async updateMenuItem(id: string, menuItem: MenuItem): Promise<MenuItem> {
    const updatedMenuItem = await this.db.menuItem.update({
      where: { id },
      data: {
        name: menuItem.name,
        description: menuItem.description,
        price: menuItem.price,
        available: menuItem.available,
      },
    });
    return this.mapper.menuItems(updatedMenuItem);
  }
}
