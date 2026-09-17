"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const baseClass_1 = require("../../crossCutting/objects/baseClass");
const uuid_1 = require("uuid");
const zod_1 = require("zod");
const schema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});
class BaseModel extends baseClass_1.BaseClass {
    constructor(props, schemaShape, id) {
        const propsWithId = {
            ...props,
            id: id || (0, uuid_1.v4)(),
        };
        super(propsWithId, schema.extend(schemaShape));
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=baseModel.js.map