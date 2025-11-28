/*
 * Cuenta el número de pedidos que incluyen un producto específico...
 * Maneja columnas que pueden ser arrays de productos, strings o números...
 * Devuelve la cantidad de objetos (pedidos) donde el producto está presente o tiene valor mayor a 0...
 */
export function countOrdersWithProduct(data, productColumn, productName) {
    if (!Array.isArray(data)) return 0;

    // Verifica que productNames sea siempre un array
    const names = Array.isArray(productName) ? productName : [productName];

    return data.filter(item => {
        const value = item?.[productColumn];
        if (!value) return false;

        if (Array.isArray(value)) {
            // Si value es array, revisa si hay alguna coincidencia con cualquiera de los nombres
            return value.some(v => names.some(name => String(v).includes(name)));
        } else if (typeof value === 'string') {
            // Si value es string, revisa si incluye alguno de los nombres
            return names.some(name => value.includes(name));
        } else {
            // Para números u otros tipos truthy
            return Boolean(value);
        }
    }).length;
}