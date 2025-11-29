/*
 * Calcula la suma total de los valores numéricos asociados a una clave específica (columna) en un array de objetos.
 * Solo válido para enteros provenientes de la API de Airtable.
 */
export function calculateIntegerColumnTotal(data = [], key = 'Precio del Pedido') {
    if (!data || data.length === 0) return 0;

    return data.reduce((acc, currentObj) => {
        const value = parseInt(currentObj[key]) || 0; // Si el campo no existe o es inválido, usa 0
        return value + acc;
    }, 0);
}