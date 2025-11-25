// Esta función calcula un valor acumulado único reduciendo el array de objetos
export function valueAccumulator(data = [], prop = 'Precio del Pedido') {
    if (!data || data.length === 0) return 0;

    return data.reduce((acc, currentObj) => {
        const value = parseInt(currentObj[prop]) || 0; // Si el campo no existe o es inválido, usa 0
        return value + acc;
    }, 0);
}