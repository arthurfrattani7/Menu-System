"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMenuItemToDto = void 0;
const mapMenuItemToDto = (menuItem) => {
    return {
        id: menuItem.id,
        name: menuItem.name,
        description: menuItem.description,
        price: menuItem.price,
        createdAt: menuItem.createdAt,
        updatedAt: menuItem.updatedAt,
    };
};
exports.mapMenuItemToDto = mapMenuItemToDto;
//# sourceMappingURL=menuItems.mapping.js.map