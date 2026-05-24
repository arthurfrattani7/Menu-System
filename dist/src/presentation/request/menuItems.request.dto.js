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
exports.CreateMenuItemRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateMenuItemRequestDto {
}
exports.CreateMenuItemRequestDto = CreateMenuItemRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: " Cerveja artesanal",
        description: "Nome da cerveja ou produto",
    }),
    __metadata("design:type", String)
], CreateMenuItemRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Cerveja artesanal de trigo, com notas cítricas e refrescantes.",
        description: "Descrição dos ingredientes",
        required: false,
    }),
    __metadata("design:type", String)
], CreateMenuItemRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 34.9, description: "Preço de venda do item" }),
    __metadata("design:type", Number)
], CreateMenuItemRequestDto.prototype, "price", void 0);
//# sourceMappingURL=menuItems.request.dto.js.map