"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuApplication = void 0;
const common_1 = require("@nestjs/common");
const menu_domain_1 = require("../../domain/services/menu.domain");
const menuModel_1 = require("../../data/entity/menuModel");
const manu_mapping_1 = require("../mapping/manu.mapping");
const menuWithItems_mapping_1 = require("../mapping/menuWithItems.mapping");
let MenuApplication = class MenuApplication {
    constructor(menuDomain) {
        this.menuDomain = menuDomain;
    }
    async saveMenu(menuData) {
        const menu = new menuModel_1.Menu({
            name: menuData.name,
            customerId: menuData.customerId,
            sent: menuData.sent,
            createdAt: menuData.createdAt,
            updatedAt: menuData.updatedAt,
        });
        const createdMenu = await this.menuDomain.saveMenu(menu);
        return (0, manu_mapping_1.mapMenuToDto)(createdMenu);
    }
    async addItemsToMenu(menuId, itemIds) {
        const updatedMenu = await this.menuDomain.addItemsToMenu(menuId, itemIds);
        return (0, menuWithItems_mapping_1.mapMenuToWithItemsDto)(updatedMenu);
    }
};
exports.MenuApplication = MenuApplication;
exports.MenuApplication = MenuApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [menu_domain_1.MenuDomain])
], MenuApplication);
//# sourceMappingURL=menu.application.js.map