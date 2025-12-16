import Image from "next/image";

export function EnvironmentalCard({ value, srcImage, mainLabel, highlightLabel, title, description }) {
    return (
        <div
            title={title}
            className="flex flex-row items-center gap-3 md:gap-6 bg-white rounded-2xl shadow-lg p-4 md:p-8 w-full hover:shadow-xl transition-shadow duration-300"
        >
            {/* Imagen */}
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                <Image
                    src={srcImage}
                    alt={`${mainLabel} ${highlightLabel}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Contenido */}
            <div className="flex-1 text-left">
                <h3 className="text-base md:text-xl font-bold text-[#135A36] mb-0.5 md:mb-1 font-[family-name:var(--font-bricolage)]">
                    {mainLabel} <span className="text-[#00A751]">{highlightLabel}</span>
                </h3>
                <p className="text-3xl md:text-4xl font-extrabold text-[#00A751] mb-1 md:mb-2 font-[family-name:var(--font-bricolage)]">
                    {value}
                </p>
                {description && (
                    <p className="text-xs md:text-base text-gray-600 leading-tight md:leading-normal">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
