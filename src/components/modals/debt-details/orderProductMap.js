import { GR_AROMATICS_PRODUCTS, UNITS_COLUMN_PRODUCTS } from "@/constants/afoodProducts";
import { UNITS_AROMATICS_PRODUCTS } from "@/constants/afoodProducts";
import { calculateTotalQuantityForProduct } from "@/lib/calculations/calculateTotalQuantityForProduct";
import { formatSliceFirstFive } from "@/lib/formatters/formatSliceProduct";

export const orderProductMap = [
    {
        // Columna: 'Total Lechugas Entregadas'
        name: "handleLettucesByUnits",
        handler: (data) => {
            if (!Boolean(data?.[UNITS_COLUMN_PRODUCTS.lechugas])) return '';
            return `${data?.[UNITS_COLUMN_PRODUCTS.lechugas]} lechu`
        }
    },
    {
        // Columna: 'Productos Aromáticas' (formato gr)
        name: "handleAromaticsByGrams",
        handler: (data) => {
            const valueProductAromatics = data?.['Producto Aromáticas']; // Columna Airtable productos
            const valueQtyAromatics = data?.['Cantidad g Aromáticas']; // Columna Airtable cantidades
            if (!Array.isArray(valueProductAromatics) || !Array.isArray(valueQtyAromatics)) return '';

            return valueProductAromatics
                .reduce((acc, product) => {
                    if (!GR_AROMATICS_PRODUCTS.includes(product)) return acc;
                    const qtyProduct = calculateTotalQuantityForProduct([data], 'Producto Aromáticas', 'Cantidad g Aromáticas', product);
                    if (isNaN(qtyProduct) || qtyProduct <= 0) return acc;
                    acc.push(`${qtyProduct}gr ${formatSliceFirstFive(product).toLowerCase()}`);
                    return acc;
                }, [])
                .join(', ');
        }
    },
    {
        // Columna: 'Productos Aromáticas' (formato unidades)
        name: "handleAromaticsByUnits",
        handler: (data) => {
            const valueProductAromatics = data?.['Producto Aromáticas']; // Columna Airtable productos
            const valueQtyAromatics = data?.['Cantidad g Aromáticas']; // Columna Airtable cantidades
            if (!Array.isArray(valueProductAromatics) || !Array.isArray(valueQtyAromatics)) return '';

            return valueProductAromatics
                .reduce((acc, product) => {
                    if (!UNITS_AROMATICS_PRODUCTS.includes(product)) return acc;
                    const qtyProduct = calculateTotalQuantityForProduct([data], 'Producto Aromáticas', 'Cantidad g Aromáticas', product);
                    if (isNaN(qtyProduct) || qtyProduct <= 0) return acc;
                    acc.push(`${qtyProduct}paq ${formatSliceFirstFive(product).toLowerCase()}`);
                    return acc;
                }, [])
                .join(', ');
        }
    },
];