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
exports.CoupleRepository = void 0;
const common_1 = require("@nestjs/common");
const mapper_1 = require("../../mapper/mapper");
const prisma_service_1 = require("../../providers/db/prisma.service");
let CoupleRepository = class CoupleRepository {
    constructor(db, mapper) {
        this.db = db;
        this.mapper = mapper;
    }
    async createCouple(couple) {
        const createdCouple = await this.db.couple.create({
            data: {
                userOneId: couple.userOneId,
                userTwoId: couple.userTwoId,
            },
        });
        return this.mapper.couple(createdCouple);
    }
    async getCoupleById(id) {
        const couple = await this.db.couple.findUnique({
            where: {
                id: id,
            },
        });
        return this.mapper.couple(couple);
    }
    async getCoupleByUserId(userId) {
        const couple = await this.db.couple.findFirst({
            where: {
                OR: [{ userOneId: userId }, { userTwoId: userId }],
            },
        });
        return this.mapper.couple(couple);
    }
};
exports.CoupleRepository = CoupleRepository;
exports.CoupleRepository = CoupleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mapper_1.MapperRepository])
], CoupleRepository);
//# sourceMappingURL=coupleRepository.js.map