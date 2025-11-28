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
            // Si es un array, devuelve true si al menos uno coincide
            return value.some(v => {
                // Convertimos a string por si acaso v no es string
                return String(v).includes(productName);
            });
        } else if (typeof value === 'string') {
            return value.includes(productName);
        } else {
            // Para números u otros tipos truthy
            return Boolean(value);
        }
    }).length;
}