/**
 * Devuelve las primeras 3 palabras de una cadena sin alterar su formato.
 * Si la cadena tiene menos de 3 palabras, devuelve la original.
 */
function firstThreeWords(input) {
    if (typeof input !== 'string') return '';

    // Quita los espacios extra alrededor y divide por uno o más espacios
    const words = input.trim().split(/\s+/);

    // Si hay menos de 3 palabras, devuelve tal cual
    if (words.length <= 3) return input.trim();

    // Une solo las primeras 3 palabras conservando su forma original
    return words.slice(0, 3).join(" ");
}
