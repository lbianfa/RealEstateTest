import { useState } from "react";

export const PropertiesHeader = ({
    onSearchByName,
    onSearchByAddress,
    onPriceChange
}: {
    onSearchByName: (name: string) => void;
    onSearchByAddress: (address: string) => void;
    onPriceChange: (min: number, max: number) => void;
}) => {

    const [showFilters, setShowFilters] = useState(false);

    const onToggleFilters = () => {
        setShowFilters(!showFilters);
    }
    
    return (
        <div className="fixed top-0 left-0 right-0 z-10 bg-secondary shadow-lg">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center p-4 pb-2 justify-between">
                    <h2 className="text-neutral text-lg font-bold leading-tight tracking-[-0.015em]">Properties</h2>
                    <div className="flex items-center justify-end">
                        <button
                            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-neutral gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
                            onClick={onToggleFilters}
                        >
                            {showFilters ? <i className="bi bi-x text-neutral text-2xl"></i> : <i className="bi bi-sliders text-neutral text-xl"></i>}
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-3">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-secondary-light shadow-md">
                        <div
                            className="text-accent-light flex border-none bg-secondary-light items-center justify-center pl-4 rounded-l-xl border-r-0"
                        >
                            <i className="bi bi-search text-accent-light" style={{ fontSize: "24px" }}></i>
                        </div>
                        <input
                            placeholder="Search by name"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-neutral focus:outline-0 border-none bg-secondary-light h-full placeholder:text-accent-light px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            onChange={(e) => onSearchByName(e.target.value)}
                        />
                        </div>
                    </label>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3" style={{ display: showFilters ? "grid" : "none" }}>
                        <label className="flex flex-col h-12 w-full">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-secondary-light shadow-md">
                                <div
                                    className="text-accent-light flex border-none bg-secondary-light items-center justify-center pl-4 rounded-l-xl border-r-0"
                                >
                                    <i className="bi bi-geo-alt text-accent-light" style={{ fontSize: "24px" }}></i>
                                </div>
                                <input
                                    placeholder="Search by address"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-neutral focus:outline-0 border-none bg-secondary-light h-full placeholder:text-accent-light px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                    onChange={(e) => onSearchByAddress(e.target.value)}
                                />
                            </div>
                        </label>
                        <input
                            type="number"
                            min={0}
                            placeholder="Min price"
                            className="form-input h-12 rounded-xl text-neutral focus:outline-0 border-none bg-secondary-light placeholder:text-accent-light px-4 shadow-md"
                            onChange={(e) => onPriceChange(Number(e.target.value), NaN)}
                        />
                        <input
                            type="number"
                            min={0}
                            placeholder="Max price"
                            className="form-input h-12 rounded-xl text-neutral focus:outline-0 border-none bg-secondary-light placeholder:text-accent-light px-4 shadow-md"
                            onChange={(e) => onPriceChange(NaN, Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
