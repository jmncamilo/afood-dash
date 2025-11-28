/*
 * Cuenta el número de pedidos que incluyen un producto específico...
 * Maneja columnas que pueden ser arrays de productos, strings o números...
 * Devuelve la cantidad de objetos (pedidos) donde el producto está presente o tiene valor mayor a 0...
 */
export function countOrdersWithProduct(data, productColumn, productName) {
    if (!Array.isArray(data)) return 0;

    return data.filter(item => {
        const value = item?.[productColumn];
        if (!value) return false;

        if (Array.isArray(value)) {
            // Para arrays de productos
            return value.some(f => f.includes(productName));
        } else if (typeof value === 'string') {
            // Para strings que representan un producto
            return value.includes(productName);
        } else {
            // Para valores únicos tipo number, si es mayor a 0 lo cuenta como pedido
            return Boolean(value);
        }
    }).length;
}