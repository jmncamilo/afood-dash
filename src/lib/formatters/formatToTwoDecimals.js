export function formatToTwoDecimals(value) {
    const num = Number(value);
    if (Number.isNaN(num)) return 0;
    return parseFloat(num.toFixed(2));
}