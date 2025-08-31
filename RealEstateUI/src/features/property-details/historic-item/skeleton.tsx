export const PropertyDetailHistoricItemSkeleton = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-1 animate-pulse">
                <div className="w-[1.5px] bg-secondary-light h-2"></div>
                <div className="text-secondary-light" data-icon="House" data-size="24px" data-weight="regular">
                    <i className="bi bi-house text-xl"></i>
                </div>
                <div className="w-[1.5px] bg-secondary-light h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3 animate-pulse">
                <p className="text-white text-base font-medium leading-normal">sale</p>
                <p className="text-accent-light text-base font-normal leading-normal">Loading...</p>
            </div>
        </>
    )
}