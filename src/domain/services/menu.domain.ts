import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { MenuRepository } from "../../data/repositories/db/menu.repository";
import { Menu } from "../../data/entity/menuModel";

@Injectable()
export class MenuDomain {
  constructor(private readonly menuRepository: MenuRepository) {}

  async saveMenu(menu: Menu): Promise<Menu> {
    return this.menuRepository.createMenu(menu);
  }
}
