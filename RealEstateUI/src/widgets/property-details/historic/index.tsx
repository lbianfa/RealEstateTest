import { PropertyDetailHistoricItem } from "../../../features/property-details/historic-item"
import { PropertyDetailHistoricItemSkeleton } from "../../../features/property-details/historic-item/skeleton"
import { usePropertyTracesByPropertyId } from "./query"

export const PropertyDetailHistoric = ({ propertyId }: { propertyId: string }) => {
    const { data: propertyTraces, isLoading, isError } = usePropertyTracesByPropertyId(propertyId)

    return (
        <div className="mb-8">
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Historic</h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                { !isLoading && !isError && propertyTraces && propertyTraces.length > 0 && propertyTraces.map((propertyTrace) => (
                    <PropertyDetailHistoricItem key={propertyTrace.id} propertyTrace={propertyTrace} />
                ))}
                {isLoading && !isError && (
                    <PropertyDetailHistoricItemSkeleton />
                )}
            </div>
            {isError && !isLoading && (
                <div className="flex flex-1 flex-col py-3">
                    <p className="text-accent-light text-base font-normal leading-normal ml-4">Error to load historic</p>
                </div>
            )}
            {!isLoading && !isError && propertyTraces && propertyTraces.length === 0 && (
                <div className="flex flex-1 flex-col py-3">
                    <p className="text-accent-light text-base font-normal leading-normal ml-4">No historic found</p>
                </div>
            )}
        </div>
    )
}
