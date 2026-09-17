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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mapper_1 = require("../../mapper/mapper");
const prisma_service_1 = require("../../providers/db/prisma.service");
let UserRepository = class UserRepository {
    constructor(db, mapper) {
        this.db = db;
        this.mapper = mapper;
    }
    async createUser(user) {
        const createdUser = await this.db.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });
        return this.mapper.user(createdUser);
    }
    async getUserById(id) {
        const user = await this.db.user.findUnique({
            where: {
                id: id,
            },
        });
        return this.mapper.user(user);
    }
    async getUserByEmail(email) {
        const user = await this.db.user.findUnique({
            where: {
                email: email,
            },
        });
        return this.mapper.user(user);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mapper_1.MapperRepository])
], UserRepository);
//# sourceMappingURL=userRepository.js.map