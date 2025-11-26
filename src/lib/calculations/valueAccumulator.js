// Esta función calcula un valor acumulado único reduciendo un array de objetos por clave
export function valueAccumulator(data = [], key = 'Precio del Pedido') {
    if (!data || data.length === 0) return 0;

    return data.reduce((acc, currentObj) => {
        const value = parseInt(currentObj[key]) || 0; // Si el campo no existe o es inválido, usa 0
        return value + acc;
    }, 0);
}