import type { PropertyTrace } from "../../../entities/property-trace/model"

export const PropertyDetailHistoricItem = ({ propertyTrace }: { propertyTrace: PropertyTrace }) => {
    return (
        <>
            <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-secondary-light h-2"></div>
                <div className="text-secondary-light" data-icon="House" data-size="24px" data-weight="regular">
                    <i className="bi bi-house text-xl"></i>
                </div>
                <div className="w-[1.5px] bg-secondary-light h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">sale</p>
                <p className="text-accent-light text-base font-normal leading-normal">{propertyTrace.dateSale.toLocaleDateString()} · {propertyTrace.name} · {propertyTrace.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>
        </>
    )
}
