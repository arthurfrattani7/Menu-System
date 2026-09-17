"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const baseModel_1 = require("./baseModel");
const zod_1 = require("zod");
exports.UserSchema = zod_1.z
    .object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(2).max(100),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1),
    createdAt: zod_1.z.date(),
})
    .partial({
    id: true,
    name: true,
    email: true,
    password: true,
    createdAt: true,
});
class User extends baseModel_1.BaseModel {
    constructor(props, id, schemaShape) {
        super(props, schemaShape || exports.UserSchema.shape, id);
    }
}
exports.User = User;
//# sourceMappingURL=userModel.js.map