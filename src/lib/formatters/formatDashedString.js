// Formatea una cadena en el formato "xxxx-xxxx-xxxx" reemplazando los guiones por espacios
export function formatDashedString(string) {
    if (typeof string !== 'string' || !string) return 'Afood Co';

    return string
        .split("-")
        .join(" ");
}