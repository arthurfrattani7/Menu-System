"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES_KEY = void 0;
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
exports.ROLES_KEY = "roles";
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.ROLES_KEY, roles), (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiUnauthorizedResponse)({ description: "Unauthorized" }));
}
//# sourceMappingURL=auth.decorator.js.map