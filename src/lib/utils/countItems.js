// Contabiliza el total de ítems que tiene un string donde están separados por coma
export function countItems(str) {
    if (!str || str.trim() === '') {
        return 0;
    }
    return str.split(',').length;
}