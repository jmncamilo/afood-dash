// Esta función extrae y devuelve el nombre del cliente de una cadena formateada por Airtable así 'ID - Cliente - Estado' en columna 'Id Cumplimiento'
export function formatClientName(str) {
    if (!str) return '';
    const parts = str.split(' - ');
    return parts[1] || '';
}