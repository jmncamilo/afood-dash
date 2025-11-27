export function formatSliceNit(text) {
    if (typeof text !== 'string' || text.length < 4) return '1903';
    return text.slice(-4);
}