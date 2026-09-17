"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperRepository = void 0;
const injectable_decorator_1 = require("@nestjs/common/decorators/core/injectable.decorator");
const userModel_1 = require("../entity/userModel");
let MapperRepository = class MapperRepository {
    user(user) {
        return new userModel_1.User({
            name: user.name,
            email: user.email,
            password: user.password,
            createdAt: user.createdAt,
        }, user.id);
    }
};
exports.MapperRepository = MapperRepository;
exports.MapperRepository = MapperRepository = __decorate([
    (0, injectable_decorator_1.Injectable)()
], MapperRepository);
//# sourceMappingURL=mapper.js.map