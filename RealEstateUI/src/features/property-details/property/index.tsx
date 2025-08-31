import { useState } from "react"
import type { Property } from "../../../entities/property/model"

export const PropertyDetails = ({ property }: { property: Property | null }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [isImageError, setIsImageError] = useState(false)

    return (
        <>
            <div
                className="w-full h-80 bg-center bg-no-repeat bg-cover shrink-0 overflow-hidden relative"
            >
                <img
                    src={property?.picture}
                    alt={property?.name}
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
            <h1 className="text-white text-[22px] font-bold leading-tight px-4 text-left pb-3 pt-5">{property?.name}</h1>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">{property?.addressProperty}</p>
            <p className="flex items-center justify-center overflow-hidden rounded-full py-2 px-4 pb-3 bg-secondary-light text-neutral text-sm font-mediumleading-normal w-fit ml-3">{property?.priceProperty.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        </>
    )
}
