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
exports.CoupleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const couple_application_1 = require("../../application/applications/couple.application");
const couple_request_dto_1 = require("../dto/request/couple.request.dto");
const couple_response_dto_1 = require("../dto/response/couple.response.dto");
let CoupleController = class CoupleController {
    constructor(coupleApplication) {
        this.coupleApplication = coupleApplication;
    }
    async createCouple(data) {
        return this.coupleApplication.createCouple(data);
    }
    async getCoupleById(id) {
        return this.coupleApplication.getCoupleById(id);
    }
    async getCoupleByUserId(userId) {
        return this.coupleApplication.getCoupleByUserId(userId);
    }
};
exports.CoupleController = CoupleController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: couple_response_dto_1.CoupleResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [couple_request_dto_1.CoupleRequestDto]),
    __metadata("design:returntype", Promise)
], CoupleController.prototype, "createCouple", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOkResponse)({ type: couple_response_dto_1.CoupleResponseDto }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoupleController.prototype, "getCoupleById", null);
__decorate([
    (0, common_1.Get)("user/:userId"),
    (0, swagger_1.ApiOkResponse)({ type: couple_response_dto_1.CoupleResponseDto }),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoupleController.prototype, "getCoupleByUserId", null);
exports.CoupleController = CoupleController = __decorate([
    (0, common_1.Controller)("couple"),
    (0, swagger_1.ApiTags)("Couple"),
    __metadata("design:paramtypes", [couple_application_1.CoupleApplication])
], CoupleController);
//# sourceMappingURL=couple.controller.js.map