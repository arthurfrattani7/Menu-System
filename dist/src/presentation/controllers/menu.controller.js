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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const menu_application_1 = require("../../application/applications/menu.application");
const menu_dto_1 = require("../response/menuItems/menu.dto");
const menu_request_dto_1 = require("../request/menu.request.dto");
let MenuController = class MenuController {
    constructor(menuApplication) {
        this.menuApplication = menuApplication;
    }
    async createMenu(body) {
        return await this.menuApplication.saveMenu(body);
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: "Cadastrar um novo cardápio",
        description: "Recebe os dados brutos da requisição e envia para a camada de aplicação processar.",
    }),
    (0, swagger_1.ApiBody)({ type: menu_request_dto_1.CreateMenuRequestDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Cardápio criado com sucesso.",
        type: menu_dto_1.MenuDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_request_dto_1.CreateMenuRequestDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "createMenu", null);
exports.MenuController = MenuController = __decorate([
    (0, common_1.Controller)("menus"),
    (0, swagger_1.ApiTags)("Menus"),
    __metadata("design:paramtypes", [menu_application_1.MenuApplication])
], MenuController);
//# sourceMappingURL=menu.controller.js.map