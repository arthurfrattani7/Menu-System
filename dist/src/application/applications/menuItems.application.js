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
exports.MenuItemsApplication = void 0;
const common_1 = require("@nestjs/common");
const menuItems_domain_1 = require("../../domain/services/menuItems.domain");
const menuItemsModel_1 = require("../../data/entity/menuItemsModel");
const menuItems_mapping_1 = require("../mapping/menuItems.mapping");
let MenuItemsApplication = class MenuItemsApplication {
    constructor(menuItemDomain) {
        this.menuItemDomain = menuItemDomain;
    }
    async saveMenuItem(menuItemData) {
        const menuItem = new menuItemsModel_1.MenuItem({
            name: menuItemData.name,
            description: menuItemData.description,
            price: menuItemData.price,
            available: true,
            createdAt: menuItemData.createdAt,
            updatedAt: menuItemData.updatedAt,
        });
        const createdMenuItem = await this.menuItemDomain.saveMenuItem(menuItem);
        return (0, menuItems_mapping_1.mapMenuItemToDto)(createdMenuItem);
    }
    async getAllMenuItems() {
        const menuItems = await this.menuItemDomain.getAllMenuItems();
        return menuItems.map(menuItems_mapping_1.mapMenuItemToDto);
    }
    async deleteMenuItem(id) {
        await this.menuItemDomain.deleteMenuItem(id);
    }
    async updateMenuItem(id, menuItemData) {
        const menuItem = new menuItemsModel_1.MenuItem({
            name: menuItemData.name,
            description: menuItemData.description,
            price: menuItemData.price,
            available: true,
            createdAt: menuItemData.createdAt,
            updatedAt: menuItemData.updatedAt,
        });
        const updatedMenuItem = await this.menuItemDomain.updateMenuItem(id, menuItem);
        return (0, menuItems_mapping_1.mapMenuItemToDto)(updatedMenuItem);
    }
};
exports.MenuItemsApplication = MenuItemsApplication;
exports.MenuItemsApplication = MenuItemsApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [menuItems_domain_1.MenuItemsDomain])
], MenuItemsApplication);
//# sourceMappingURL=menuItems.application.js.map