// Esta función extrae y devuelve el ID del pedido de una cadena formateada por Airtable así 'ID - Cliente - Estado' en columna 'Id Cumplimiento'
export function formatClientOrderId(str) {
    if (!str) return '';
    const parts = str.split(' - ');
    return parts[0] || '';
}