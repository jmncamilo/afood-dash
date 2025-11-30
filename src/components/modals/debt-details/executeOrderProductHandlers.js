/*
 * Procesa todos los productos del pedido utilizando los handlers registrados en orderProductMap.
 * Recibe la data (objeto) y retorna un objeto con el string completo que detalla los productos y cantidades asociadas, así como
 * el total de los ítems habídos dentro de ese string.
 */
import { orderProductMap } from "@/components/modals/debt-details/orderProductMap";
import { countItems } from "@/lib/utils/countItems";

export function executeOrderProductHandlers(orderData) {
    // Ejecuta los handlers y devuelve un array de strings
    const orderDetails = orderProductMap
        .map(({name, handler}) => {
            console.log(`Ejecutando el handler: ${name}`);
            return handler(orderData);
        })
        .filter(detail => detail.trim() !== "") // Filtra los strings vacíos del array construido
        .join(', '); // Fusiona el array de strings en un solo string (detalle de productos y cantidades del pedido)

    // Contabiliza el total de ítems dentro de ese string fusionado
    const totalItemsInOrder = countItems(orderDetails);

    // Retorna objeto con el string y el total de ítems
    return { orderDetails, totalItemsInOrder };
}