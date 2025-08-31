import { useNavigate } from "react-router"

export const PropertyDetailsHeader = () => {
    const navigate = useNavigate()

    return (
        <div className="fixed top-0 left-0 right-0 z-10 bg-secondary shadow-lg">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center p-4 pb-2 justify-start">
                    <button
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-neutral gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 mr-4"
                        onClick={() => navigate("/")}
                    >
                        <i className="bi bi-arrow-left text-neutral text-xl" />
                    </button>
                    <h2 className="text-neutral text-lg font-bold leading-tight tracking-[-0.015em]">Property Details</h2>
                </div>
            </div>
        </div>
    )
}
