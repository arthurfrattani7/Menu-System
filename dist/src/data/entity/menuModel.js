"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome é obrigatório"),
    sent: zod_1.z.boolean().default(false),
    customerId: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});
class Menu {
    constructor(props, id) {
        this.id = id;
        Object.assign(this, props);
    }
}
exports.Menu = Menu;
//# sourceMappingURL=menuModel.js.map