import { calculateTotalQuantityForAromatics } from "@/lib/calculations/calculateTotalQuantityForAromatics";
import { countOrdersWithProduct } from "@/lib/utils/countOrdersWithProduct";
import { GR_AROMATICS_PRODUCTS } from "@/constants/afoodProducts";
import { calculateTotalQuantityForProduct } from "@/lib/calculations/calculateTotalQuantityForProduct";

// Función para reutilizar la lógica cuando se invoca el setter del estado que muestra la información en SummaryCards
function setSummaryValues(obj, setter) {
    Object.entries(obj).forEach(([key, value]) => {
        setter(key, value);
    });
}

// Mapeo de funciones a ejecutar de acuerdo a la opción seleccionada en SummaryHeader
export const dropdownActions = {
    'Todos': (data, setter) => {
        return 0;
    },
    'Lechuga': (data, setter) => {
        const orders = countOrdersWithProduct(data, 'Total Lechugas Entregadas', undefined);
        const units = 0;
        const grams = 0;
        return 0;
    },
    'Aromática': (data, setter) => {
        const orders = countOrdersWithProduct(data, 'Producto Aromáticas', GR_AROMATICS_PRODUCTS) ?? 0;
        const units = 0;
        const grams = calculateTotalQuantityForAromatics(data) ?? 0;

        const dataToSet = { orders, units, grams };
        setSummaryValues(dataToSet, setter);
    },
    'Cilantrón': (data, setter) => {
        const orders = countOrdersWithProduct(data, 'Producto Aromáticas', 'Cilantrón');
        const units = calculateTotalQuantityForProduct(data, 'Producto Aromáticas', 'Cantidad g Aromáticas', 'Cilantrón');
        const grams = 0;

        const dataToSet = { orders, units, grams };
        setSummaryValues(dataToSet, setter);
    },
};

// Esta función maneja la invocación de las funciones calculadoras que han sido mapeadas arriba
export function invokeDropdownAction(key, data, setter) {
    const action = dropdownActions[key] || (() => 0); // fallback
    return action(data, setter);
}
