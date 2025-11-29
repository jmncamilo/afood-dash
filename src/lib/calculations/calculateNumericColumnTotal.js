// Calcula y devuelve el total de toda una columna específica que tenga datos numéricos válidos como float o int en Airtable
export function calculateNumericColumnTotal(data, columnName) {
    if (!Array.isArray(data)) return 0;
    return data
        .reduce((acc, currentObj) => acc + (Number(currentObj?.[columnName] || 0)), 0);
}