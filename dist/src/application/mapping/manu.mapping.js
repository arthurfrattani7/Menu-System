"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMenuToDto = void 0;
const mapMenuToDto = (menu) => {
    return {
        id: menu.id,
        name: menu.name,
        sent: menu.sent,
        customerId: menu.customerId,
        createdAt: menu.createdAt,
        updatedAt: menu.updatedAt,
    };
};
exports.mapMenuToDto = mapMenuToDto;
//# sourceMappingURL=manu.mapping.js.map