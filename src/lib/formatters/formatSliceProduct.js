export function formatSliceFirstFive(text) {
    if (typeof text !== 'string') return '';
    return text.length <= 5 ? text : text.slice(0, 5);
}