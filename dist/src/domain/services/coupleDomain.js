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
exports.CoupleDomain = void 0;
const common_1 = require("@nestjs/common");
const coupleRepository_1 = require("../../data/repositories/db/coupleRepository");
let CoupleDomain = class CoupleDomain {
    constructor(coupleRepository) {
        this.coupleRepository = coupleRepository;
    }
    async createCouple(couple) {
        const createdCouple = await this.coupleRepository.createCouple(couple);
        return createdCouple;
    }
    async getCoupleById(id) {
        const couple = await this.coupleRepository.getCoupleById(id);
        return couple;
    }
    async getCoupleByUserId(userId) {
        const couple = await this.coupleRepository.getCoupleByUserId(userId);
        return couple;
    }
};
exports.CoupleDomain = CoupleDomain;
exports.CoupleDomain = CoupleDomain = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [coupleRepository_1.CoupleRepository])
], CoupleDomain);
//# sourceMappingURL=coupleDomain.js.map