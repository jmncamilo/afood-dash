// Mapeo de funciones a ejecutar de acuerdo a la opción seleccionada en SummaryHeader
export const dropdownActions = {
    'Todos': () => {
        return 0;
    },
    'Lechuga': () => {
        return 0;
    },
    'Aromática': () => {
        return 0;
    },
    'Cilantrón': () => {
        return 0;
    },
};


// Esta función maneja la invocación de las funciones calculadoras que han sido mapeadas arriba
function invokeDropdownAction(key) {
    const action = dropdownActions[key] || (() => 0); // fallback
    return action();
}
