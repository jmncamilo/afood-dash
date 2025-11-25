import { formatCurrency } from "@/lib/formatters/formatCurrency.js";
import Image from "next/image";
import { valueAccumulator } from "@/lib/calculations/valueAccumulator.js";
import { formatClientName } from "@/lib/formatters/formatClientName.js"

export default function CreditCard({ data }) {
    const balance = valueAccumulator(data, 'Precio del Pedido');

    return (
        <div className="relative w-full max-w-sm aspect-[1.586/1] bg-gradient-to-br from-green-900 to-green-500 rounded-2xl shadow-xl p-6 flex flex-col justify-between">
            {/* Logo en esquina superior derecha */}
            <div className="flex justify-between items-start">
                <h2 className="text-white text-lg sm:text-xl font-semibold max-w-[60%]">
                    {formatClientName(data[0]['Id Cumplimiento'])}
                </h2>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                    <Image
                        src="/branding/afood_logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Saldo y fecha en la parte inferior */}
            <div className="space-y-2">
                <div className="text-white">
                    <p className="text-xs sm:text-sm opacity-80 mb-1">Total Pagado</p>
                    <p className="text-2xl sm:text-3xl font-bold tracking-wider">
                        ${formatCurrency(balance)},00
                    </p>
                </div>
                <div className="text-white">
                    <p className="text-xs sm:text-sm opacity-80">Cliente desde</p>
                    <p className="text-sm sm:text-base font-medium">
                        {data[0]['Fecha real de entrega raw']}
                    </p>
                </div>
            </div>
        </div>
    );
}