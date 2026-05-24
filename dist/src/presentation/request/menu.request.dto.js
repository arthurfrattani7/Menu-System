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
exports.CreateMenuRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateMenuRequestDto {
}
exports.CreateMenuRequestDto = CreateMenuRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Cardápio de Bebidas - Sexta-feira',
        description: 'Nome ou título identificador para esta versão do cardápio volátil.',
    }),
    __metadata("design:type", String)
], CreateMenuRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5521999999999',
        description: 'Número do WhatsApp ou identificador único do cliente que está a receber o cardápio.',
    }),
    __metadata("design:type", String)
], CreateMenuRequestDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Indica se o cardápio já foi disparado para o cliente no WhatsApp.',
        default: true,
        required: false,
    }),
    __metadata("design:type", Boolean)
], CreateMenuRequestDto.prototype, "sent", void 0);
//# sourceMappingURL=menu.request.dto.js.map