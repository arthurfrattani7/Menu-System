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
exports.MenuItemsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MenuItemsDto {
}
exports.MenuItemsDto = MenuItemsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "123e4567-e89b-12d3-a456-426614174000" }),
    __metadata("design:type", String)
], MenuItemsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Item 1" }),
    __metadata("design:type", String)
], MenuItemsDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Descrição do item 1" }),
    __metadata("design:type", String)
], MenuItemsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10.99 }),
    __metadata("design:type", Number)
], MenuItemsDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2024-06-01T12:00:00Z" }),
    __metadata("design:type", Date)
], MenuItemsDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2024-06-01T12:00:00Z" }),
    __metadata("design:type", Date)
], MenuItemsDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=menuItems.dto.js.map