// This function calculates a single accumulated value by reducing the array of objects
export function valueAccumulator(data = [], prop = 'Precio Total Lechugas') {
    if (!data || data.length === 0) return 0;
    return data.reduce((acc, currentObj) => parseInt(currentObj[prop]) + acc, 0);
}