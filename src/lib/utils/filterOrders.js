// Esto filtra por propiedad los elementos de un array (principalmente su uso será para el filtrado de pedidos por propiedad)
export function filterOrders(orders = [], key = '', value = '') {
    if (!Array.isArray(orders)) {
        return [];
    }

    return orders.filter(order => order?.[key]?.toLowerCase() === value.toLowerCase());
}