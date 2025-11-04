// This function extracts and returns the client name from a string formatted by airtable as "XX - Name - XX"
export function formatClientName(str) {
    if (!str) return '';
    const parts = str.split(' - ');
    return parts[1] || '';
}