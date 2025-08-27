export const PropertiesHeader = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-10 bg-primary">
            <div className="flex items-center bg-primary p-4 pb-2 justify-between">
                <h2 className="text-neutral text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Properties</h2>
                <div className="flex w-12 items-center justify-end">
                    <button
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-neutral gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
                    >
                    <i className="bi bi-sliders text-neutral" style={{ fontSize: "24px" }}></i>
                    </button>
                </div>
            </div>
            <div className="px-4 py-3">
                <label className="flex flex-col min-w-40 h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div
                        className="text-accent-light flex border-none bg-secondary items-center justify-center pl-4 rounded-l-xl border-r-0"
                    >
                        <i className="bi bi-search text-accent-light" style={{ fontSize: "24px" }}></i>
                    </div>
                    <input
                        placeholder="Search by name"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-neutral focus:outline-0 focus:ring-0 border-none bg-secondary focus:border-none h-full placeholder:text-accent-light px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    />
                    </div>
                </label>
            </div>
        </div>
    )
}
