export function formatCurrency(value) {
    return new Intl.NumberFormat('es-CO', {
        style: 'decimal',
        minimumFractionDigits: 0
    }).format(value);
}