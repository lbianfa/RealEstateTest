import { useState } from "react";
import type { Property } from "../../../entities/property/model";

export const PropertiesCard = ({ property }: { property: Property }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isImageError, setIsImageError] = useState(false);

    return (
        <div className="flex items-stretch justify-between gap-4 rounded-xl p-4 bg-secondary shadow-sm">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
                <p className="text-accent-light text-sm font-normal leading-normal">{property.ownerName}</p>
                <p className="text-neutral text-base font-bold leading-tight">{property.name}</p>
                <p className="text-accent-light text-sm font-normal leading-normal">{property.addressProperty}</p>
            </div>
            <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-secondary-light text-neutral text-sm font-medium leading-normal w-fit"
            >
                <span className="truncate">{property.priceProperty.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </button>
            </div>
            <div
                className="w-28 h-28 bg-center bg-no-repeat bg-cover rounded-xl shrink-0 overflow-hidden relative"
            >
                <img
                    src={property.picture}
                    alt={property.name}
                    onLoad={() => setIsImageLoaded(true)}
                    onError={() => setIsImageError(true)}
                    className={"w-full h-full object-cover " + (isImageLoaded ? "opacity-100" : "opacity-0")}
                />
                {!isImageLoaded && !isImageError && (
                    <div className="absolute inset-0 bg-gray-500 animate-pulse" />
                )}
                {isImageError && (
                    <div className="absolute inset-0 bg-gray-500 flex items-center justify-center opacity-50">
                        <i className="bi bi-image-fill text-white text-2xl"></i>
                    </div>
                )}
            </div>
        </div>
    )
}
