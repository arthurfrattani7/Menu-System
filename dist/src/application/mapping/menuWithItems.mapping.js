"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMenuToWithItemsDto = mapMenuToWithItemsDto;
function mapMenuToWithItemsDto(menu) {
    return {
        id: menu.id,
        name: menu.name,
        customerId: menu.customerId,
        sent: menu.sent,
        createdAt: menu.createdAt,
        items: menu.items
            ? menu.items.map((item) => ({
                id: item.id,
                name: item.name,
                description: item.description,
                price: Number(item.price),
                available: item.available,
                createdAt: item.createdAt,
            }))
            : [],
    };
}
//# sourceMappingURL=menuWithItems.mapping.js.map