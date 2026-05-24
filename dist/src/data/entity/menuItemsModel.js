"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome é obrigatório"),
    description: zod_1.z.string().optional().nullable(),
    price: zod_1.z.number().positive("O preço deve ser maior que zero"),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});
class MenuItem {
    constructor(props, id) {
        this.id = id;
        Object.assign(this, props);
    }
}
exports.MenuItem = MenuItem;
//# sourceMappingURL=menuItemsModel.js.map