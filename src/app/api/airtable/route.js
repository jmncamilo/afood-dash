import { NextResponse } from "next/server";
import Airtable from "airtable";
import { formatAirtableFormulaParam } from "@/lib/formatters/formatAirtableFormulaParam.js";

export async function GET(req) {
    // Extrae los parámetros de búsqueda (query params) de la URL de la solicitud
    const { searchParams } = new URL(req.url);
    const customerName = formatAirtableFormulaParam(searchParams.get('customer')); // Extrae lo que el frontend envía

    // Inicializa la instancia de Airtable utilizando el ID de la base y el token de acceso desde las variables de entorno
    const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

    try {
        // Crea una fórmula de Airtable que busca si el nombre del cliente está contenido en el campo "Id Cumplimiento" y si el pedido ha sido entregado
        const formula = `AND(
            FIND('${customerName.toUpperCase()}', {Id Cumplimiento}),
            {Pedido Entregado} = 'Sí'
        )`;
        // Consulta los registros filtrando estas columnas por cliente y ordenando ascendentemente por "Id Cumplimiento"
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

        // Maneja el error si la consulta no es exitosa y por alguna razón se devuelve un array vacío
        if (records.length === 0) {
            return NextResponse.json({
                    success: false,
                    message: 'No se encontraron registros para el cliente especificado.',
                    data: null
                },
                { status: 404 }
            );
        }

        // Extrae únicamente la propiedad fields de cada registro
        const recordsFields = records.map(record => record.fields);

        // Envía respuesta exitosa
        return NextResponse.json({
                success: true,
                message: 'Registro(s) encontrado(s) para el cliente solicitado.',
                data: recordsFields
            },
            { status: 200 }
        );

    } catch (err) {
        console.error(err); // Testing CJ
        return NextResponse.json(
            {
                success: false,
                message: 'Error interno del servidor...',
                data: null
            },
            { status: 500 }
        );
    }

}