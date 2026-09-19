"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Couple = exports.CoupleSchema = void 0;
const baseModel_1 = require("./baseModel");
const zod_1 = require("zod");
exports.CoupleSchema = zod_1.z
    .object({
    id: zod_1.z.string().uuid(),
    userOneId: zod_1.z.string().uuid(),
    userTwoId: zod_1.z.string().uuid(),
    createdAt: zod_1.z.date(),
})
    .partial({
    id: true,
    userOneId: true,
    userTwoId: true,
    createdAt: true,
});
class Couple extends baseModel_1.BaseModel {
    constructor(props, id, schemaShape) {
        super(props, schemaShape || exports.CoupleSchema.shape, id);
    }
}
exports.Couple = Couple;
//# sourceMappingURL=coupleModel.js.map