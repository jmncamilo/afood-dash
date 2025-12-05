import Image from "next/image";

export function EnvironmentalCard({ value = 0, srcImage = '/misc/water-afood.svg', mainLabel = 'Agua', highlightLabel = 'ahorrada' }) {
    return (
        <div className="p-5 flex flex-col items-center justify-center gap-2 bg-[#fffffb] rounded-xl shadow-md shadow-black/20 md:p-8 w-full max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#57B257] font-[family-name:var(--font-bricolage)]">{value}</h2>
            <div className="relative w-full h-24 md:h-28 flex-shrink-0">
                <Image
                    src={srcImage}
                    alt="Agua ahorrada"
                    fill
                    className="object-contain object-center"
                />
            </div>
            <p className="text-md md:text-base text-[#00572D] font-[family-name:var(--font-bricolage)] font-semibold">
                {mainLabel} <span className="text-[#57B257]">{highlightLabel}</span>
            </p>
        </div>
    );
}