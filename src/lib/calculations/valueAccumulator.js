// Esta función calcula un valor acumulado único reduciendo el array de objetos
export function valueAccumulator(data = [], prop = 'Precio Total Lechugas') {
    if (!data || data.length === 0) return 0;
    return data.reduce((acc, currentObj) => parseInt(currentObj[prop]) + acc, 0);
}