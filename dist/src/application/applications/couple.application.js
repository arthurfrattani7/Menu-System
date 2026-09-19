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
exports.CoupleApplication = void 0;
const common_1 = require("@nestjs/common");
const coupleModel_1 = require("../../data/entity/coupleModel");
const coupleDomain_1 = require("../../domain/services/coupleDomain");
const exceptions_1 = require("@nestjs/common/exceptions");
let CoupleApplication = class CoupleApplication {
    constructor(coupleDomain) {
        this.coupleDomain = coupleDomain;
    }
    async createCouple(data) {
        if (data.userOneId === data.userTwoId) {
            throw new exceptions_1.BadRequestException("Um casal precisa de dois usuários diferentes");
        }
        const couple = new coupleModel_1.Couple({
            userOneId: data.userOneId,
            userTwoId: data.userTwoId,
            createdAt: new Date(),
        });
        return this.coupleDomain.createCouple(couple);
    }
    async getCoupleById(id) {
        if (!id) {
            throw new exceptions_1.BadRequestException("ID Não Encontrado");
        }
        return this.coupleDomain.getCoupleById(id);
    }
    async getCoupleByUserId(userId) {
        if (!userId) {
            throw new exceptions_1.BadRequestException("ID Não Encontrado");
        }
        return this.coupleDomain.getCoupleByUserId(userId);
    }
};
exports.CoupleApplication = CoupleApplication;
exports.CoupleApplication = CoupleApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [coupleDomain_1.CoupleDomain])
], CoupleApplication);
//# sourceMappingURL=couple.application.js.map