/*
 * Convierte una cadena de texto (asumiendo que está separada por espacios) al formato 'Title Case' (Mayúscula Inicial de Título).
 * Aplica mayúscula inicial a la primera palabra y a todas las palabras que no sean artículos, conjunciones o preposiciones (las excepciones).
 * Está diseñada para usarse en conjunto con formatClientName, capitalizando el nombre del cliente que envía la API Airtable.
*/
export function formatCapitalize(text) {
    if (typeof text !== 'string' || text.trim().length === 0) {
        return 'Afood Co';
    }
    const exceptions = ['de', 'del', 'el', 'y', 'a', 'en', 'con', 'por', 'para', 'sin', 'o', 'and'];
    return text
        .toLowerCase()
        .split(' ')
        .map((word, idx) => {
            if (idx !== 0 && exceptions.includes(word)) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
}