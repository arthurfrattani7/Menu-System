"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClass = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
function isValid(props, schema) {
    try {
        return schema.parse(props);
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            throw new common_1.BadRequestException(error);
        }
        throw new common_1.UnprocessableEntityException(error);
    }
}
class BaseClass {
    constructor(props, schema) {
        const validProps = isValid(props, schema);
        Object.assign(this, validProps);
    }
}
exports.BaseClass = BaseClass;
//# sourceMappingURL=baseClass.js.map