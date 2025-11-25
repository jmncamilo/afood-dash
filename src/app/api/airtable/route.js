import { NextResponse } from "next/server";
import Airtable from "airtable";
import { formatAirtableFormulaParam } from "@/lib/formatters/formatAirtableFormulaParam.js";

export async function GET(req) {
    // Extraemos searchParams del objeto que nos crea URL
    const { searchParams } = new URL(req.url);
    const customerName = formatAirtableFormulaParam(searchParams.get('customer')); // Extraemos lo que el frontend nos manda

    // Creamos el objeto airtable que ejecuta consultas y demás procesos usando el ID de la tabla y el token de acceso
    const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN })
        .base(process.env.AIRTABLE_BASE_ID);

    try {
        // Usamos el objeto airtable para establecer fórmula y buscar por nombre de cliente usando template literals
        const formula = `FIND('${customerName.toUpperCase()}', {Id Cumplimiento})`;

        const records = await base(process.env.AIRTABLE_BASE_TABLE_ID).select({
            fields: [
                'Id Cumplimiento',
                'Fecha real de entrega',
                'Fecha real de entrega raw',
                'Status Cumplimiento',
                'Status Pago',
                'Pedido Entregado',
                'Total Lechugas Entregadas',
                '# de Canastas',
                'Precio Unitario',
                'Precio Total Lechugas',
                'Producto Aromáticas',
                'Cantidad g Aromáticas',
                'Precio Unitario Aromáticas',
                'Precio Total Aromáticas',
                'Precio del Pedido'
            ],
            filterByFormula: formula,
            sort: [{ field: "Id Cumplimiento", direction: "asc" }],
        }).all();

        // // Extraemos solo los fields
        const recordsFields = records.map(record => record.fields);

        // Respuesta exitosa
        return NextResponse.json(recordsFields);

    } catch (err) {
        return NextResponse.json(
            { error: 'Error interno del servidor...' },
            { status: 500 }
        );
    }

}