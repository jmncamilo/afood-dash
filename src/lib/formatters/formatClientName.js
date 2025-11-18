// Esta función extrae y devuelve el nombre del cliente de una cadena formateada por Airtable como "XX - Nombre - XX"
export function formatClientName(str) {
    if (!str) return '';
    const parts = str.split(' - ');
    return parts[1] || '';
}