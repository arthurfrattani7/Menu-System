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
exports.UserApplication = void 0;
const common_1 = require("@nestjs/common");
const userModel_1 = require("../../data/entity/userModel");
const userDomain_1 = require("../../domain/services/userDomain");
const exceptions_1 = require("@nestjs/common/exceptions");
let UserApplication = class UserApplication {
    constructor(userDomain) {
        this.userDomain = userDomain;
    }
    async createUser(data) {
        const user = new userModel_1.User({
            name: data.name,
            email: data.email,
            password: data.password,
            createdAt: new Date(),
        });
        return this.userDomain.createUser(user);
    }
    async getUserById(id) {
        if (!id) {
            throw new exceptions_1.BadRequestException("ID Não Encontrado");
        }
        return this.userDomain.getUserById(id);
    }
    async getUserByEmail(email) {
        if (!email) {
            throw new exceptions_1.BadRequestException("Email Não Encontrado");
        }
        return this.userDomain.getUserByEmail(email);
    }
};
exports.UserApplication = UserApplication;
exports.UserApplication = UserApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userDomain_1.UserDomain])
], UserApplication);
//# sourceMappingURL=user.application.js.map