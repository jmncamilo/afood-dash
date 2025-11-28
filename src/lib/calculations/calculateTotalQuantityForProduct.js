// Calcula la cantidad total de un producto específico sumando los valores asociados en dos columnas de un array de objetos
export function calculateTotalQuantityForProduct(data, productColumn, quantityColumn, productName) {
    if (!Array.isArray(data)) return 0; // Guard clause por si le llega algo que no es array

    return data
        .filter(currentObj => currentObj?.[productColumn] && currentObj?.[quantityColumn])
        .reduce((acc, currentObj) => {
            // Busca el índice del producto especificado dentro del array correspondiente en el objeto actual; si no existe, devuelve -1
            const idx = currentObj?.[productColumn].findIndex(f => f.includes(productName));
            if (idx === -1) return acc;
            // Suma al acumulador el valor correspondiente a la posición encontrada
            return acc + (parseInt(currentObj?.[quantityColumn]?.[idx]) || 0);
        }, 0);
}