// Este formateador ayuda a construir la fórmula valida que usa el objeto airtable
export function formatAirtableFormulaParam(value) {
    if (!value) return ""; // Poner acá un fallback en caso de que no le llegue ningún valor, a menos que se quieran mostrar todos los registros
    return value.replace(/-/g, " ").toUpperCase();
}