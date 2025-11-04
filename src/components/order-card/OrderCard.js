import React from 'react';
import { formatCurrency } from "@/lib/formatters/formatCurrency";

const OrderCard = ({ order }) => {
    const extractClientName = (idCumplimiento) => {
        const match = idCumplimiento.match(/- (.+?) - /);
        return match ? match[1] : 'Cliente';
    };

    // Función para extraer la fecha de forma segura
    const getFormattedDate = (dateField) => {
        if (!dateField) return 'Sin fecha';

        // Si es un objeto, intenta extraer el valor
        if (typeof dateField === 'object') {
            // Si tiene una propiedad 'error', muéstralo
            if (dateField.error) return 'Error en fecha';
            // Si tiene otras propiedades, convierte a string
            return JSON.stringify(dateField);
        }

        // Si es string, retorna directamente
        return dateField;
    };

    const clientName = extractClientName(order['Id Cumplimiento']);
    const totalValue = order['Precio Total Lechugas'] + (order['Precio Total Aromáticas']?.[0] || 0);
    const formattedDate = getFormattedDate(order['Fecha real de entrega raw']);

    return (
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-5 text-white shadow-2xl m-4 min-h-[200px] flex flex-col justify-between max-w-md w-full">
            <div className="flex justify-between items-center mb-5">
                <span className="text-xs opacity-80 uppercase tracking-wider">Cliente</span>
                <span className="bg-white/20 px-3 py-1 rounded-xl text-xs font-medium">
          {order['Status Pago']}
        </span>
            </div>

            <h2 className="text-2xl font-bold mb-6 drop-shadow-md">
                {clientName}
            </h2>

            <div className="flex gap-5 mb-5">
                <div className="flex flex-col gap-1">
                    <span className="text-[11px] opacity-70 uppercase tracking-wide">Pedido</span>
                    <span className="text-sm font-semibold">
            {order['Id Cumplimiento'].split(' ')[0]}
          </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[11px] opacity-70 uppercase tracking-wide">Fecha</span>
                    <span className="text-sm font-semibold">
            {formattedDate}
          </span>
                </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/20">
                <span className="text-xs opacity-80 uppercase">Total</span>
                <span className="text-3xl font-bold drop-shadow-md">
          {formatCurrency(totalValue)}
        </span>
            </div>
        </div>
    );
};

export default OrderCard;

// TODO: Esto es solo una versión muy alpha para visualizar los datos. Ya se comprueba que los datos se llaman correctamente de
//  acuerdo al query string que se pasa en url del front. Ahora toca empezar a pintar los datos y construir el requerimiento,
//  luego las respectivas validaciones en caso de que el cliente se ponga a jugar con la url.