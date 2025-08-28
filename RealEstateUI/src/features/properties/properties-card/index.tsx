import type { Property } from "../../../entities/property/model";

export const PropertiesCard = ({ property }: { property: Property }) => {
    return (
        <div className="flex items-stretch justify-between gap-4 rounded-xl p-4">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
                <p className="text-accent-light text-sm font-normal leading-normal">{property.ownerName}</p>
                <p className="text-neutral text-base font-bold leading-tight">{property.name}</p>
                <p className="text-accent-light text-sm font-normal leading-normal">{property.addressProperty}</p>
            </div>
            <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-secondary text-neutral text-sm font-medium leading-normal w-fit"
            >
                <span className="truncate">${property.priceProperty}</span>
            </button>
            </div>
            <div
                className="w-28 h-28 bg-center bg-no-repeat bg-cover rounded-xl shrink-0"
                style={{ backgroundImage: `url(${property.picture})` }}
            />
        </div>
    )
}
