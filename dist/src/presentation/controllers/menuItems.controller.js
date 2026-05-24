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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const menuItems_application_1 = require("../../application/applications/menuItems.application");
const menuItems_dto_1 = require("../response/menuItems/menuItems.dto");
const menuItems_request_dto_1 = require("../request/menuItems.request.dto");
let MenuItemsController = class MenuItemsController {
    constructor(menuItemsApplication) {
        this.menuItemsApplication = menuItemsApplication;
    }
    async createMenuItem(body) {
        return await this.menuItemsApplication.saveMenuItem(body);
    }
    async getAllMenuItems() {
        return await this.menuItemsApplication.getAllMenuItems();
    }
    async deleteMenuItem(id) {
        await this.menuItemsApplication.deleteMenuItem(id);
    }
    async updateMenuItem(id, body) {
        return await this.menuItemsApplication.updateMenuItem(id, body);
    }
};
exports.MenuItemsController = MenuItemsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: "Cadastrar um novo item no cardápio",
        description: "Recebe os dados brutos da requisição e envia para a camada de aplicação processar.",
    }),
    (0, swagger_1.ApiBody)({ type: menuItems_request_dto_1.CreateMenuItemRequestDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Item criado com sucesso.",
        type: menuItems_dto_1.MenuItemsDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menuItems_request_dto_1.CreateMenuItemRequestDto]),
    __metadata("design:returntype", Promise)
], MenuItemsController.prototype, "createMenuItem", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: "Listar todos os itens do cardápio",
        description: "Retorna uma lista de todos os itens do cardápio.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Lista de itens do cardápio.",
        type: menuItems_dto_1.MenuItemsDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuItemsController.prototype, "getAllMenuItems", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({
        summary: "Excluir um item do cardápio",
        description: "Exclui um item do cardápio com base no ID fornecido.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Item excluído com sucesso.",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuItemsController.prototype, "deleteMenuItem", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiOperation)({
        summary: "Atualizar um item do cardápio",
        description: "Atualiza um item do cardápio com base no ID fornecido.",
    }),
    (0, swagger_1.ApiBody)({ type: menuItems_request_dto_1.CreateMenuItemRequestDto }),
    (0, swagger_1.ApiOkResponse)({
        description: "Item atualizado com sucesso.",
        type: menuItems_dto_1.MenuItemsDto,
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, menuItems_request_dto_1.CreateMenuItemRequestDto]),
    __metadata("design:returntype", Promise)
], MenuItemsController.prototype, "updateMenuItem", null);
exports.MenuItemsController = MenuItemsController = __decorate([
    (0, common_1.Controller)("menuItems"),
    (0, swagger_1.ApiTags)("MenuItems"),
    __metadata("design:paramtypes", [menuItems_application_1.MenuItemsApplication])
], MenuItemsController);
//# sourceMappingURL=menuItems.controller.js.map