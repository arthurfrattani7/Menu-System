import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../providers/db/prisma.service";
import { MapperRepository } from "../../mapper/mapper";
import { Menu } from "../../entity/menuModel";

@Injectable()
export class MenuRepository {
  constructor(
    private readonly db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async createMenu(menu: Menu): Promise<Menu> {
    const menuDB = await this.db.menu.create({
      data: {
        name: menu.name,
        customerId: menu.customerId,
        sent: menu.sent,
      },
      select: {
        id: true,
        name: true,
        customerId: true,
        sent: true,     
        createdAt: true,
        updatedAt: true,
      },
    });

    return this.mapper.menu(menuDB);
  }
}
