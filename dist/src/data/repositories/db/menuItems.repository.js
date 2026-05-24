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
exports.MenuItemRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../providers/db/prisma.service");
const mapper_1 = require("../../mapper/mapper");
let MenuItemRepository = class MenuItemRepository {
    constructor(db, mapper) {
        this.db = db;
        this.mapper = mapper;
    }
    async createMenuItem(menuItem) {
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
    async findAllMenuItems() {
        const results = await this.db.menuItem.findMany({
            orderBy: { createdAt: "desc" },
        });
        return results.map((result) => this.mapper.menuItems(result));
    }
    async deleteMenuItem(id) {
        await this.db.menuItem.delete({
            where: { id },
        });
    }
    async updateMenuItem(id, menuItem) {
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
};
exports.MenuItemRepository = MenuItemRepository;
exports.MenuItemRepository = MenuItemRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mapper_1.MapperRepository])
], MenuItemRepository);
//# sourceMappingURL=menuItems.repository.js.map