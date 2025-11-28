import { calculateTotalQuantityForProduct } from "@/lib/calculations/calculateTotalQuantityForProduct";
import { GR_AROMATICS_PRODUCTS } from "@/constants/afoodProducts";

// Obtiene la cantidad total de los productos de aromáticas que se gestionan en gramos, en lugar de unidades, desde columnas específicas de Airtable
export function calculateTotalQuantityForAromatics(data = []) {
    return GR_AROMATICS_PRODUCTS
        .reduce((acc, product) => {
            return acc + (calculateTotalQuantityForProduct(data, 'Producto Aromáticas', 'Cantidad g Aromáticas', product) ?? 0);
        }, 0);
}