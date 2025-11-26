export function filterOrders(orders = [], key = '', value = '') {
    if (!Array.isArray(orders)) {
        return [];
    }

    return orders.filter(order => order?.[key]?.toLowerCase() === value.toLowerCase());
}