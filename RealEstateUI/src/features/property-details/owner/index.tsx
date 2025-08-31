import { useEffect, useState } from "react"

export const PropertyDetailsOwner = ({ ownerName, ownerPhoto }: { ownerName?: string, ownerPhoto?: string }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [isImageError, setIsImageError] = useState(false)

    useEffect(() => {
        if (!ownerPhoto) return
        setIsImageLoaded(false)
        setIsImageError(false)
        const img = new Image()
        img.src = ownerPhoto
        img.onload = () => setIsImageLoaded(true)
        img.onerror = () => setIsImageError(true)
        return () => {
            img.onload = null
            img.onerror = null
        }
    }, [ownerPhoto])

    return (
        <div className={`${ownerName ? '': 'animate-pulse'}`}>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-5">Owner</h2>
            <div className="flex items-center gap-4 px-4 min-h-[72px] py-2">
                {isImageLoaded && (
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                        style={{ backgroundImage: `url(${ownerPhoto})` }}
                    ></div>
                )}
                {!isImageLoaded && !isImageError && (
                    <div className="aspect-square rounded-full h-14 bg-gray-500 animate-pulse" />
                )}
                {isImageError && (
                    <div className="aspect-square rounded-full h-14 bg-gray-500 flex items-center justify-center opacity-50">
                    <i className="bi bi-person-fill text-white text-2xl"></i>
                </div>
                )}
                <div className="flex flex-col justify-center">
                    <p className="text-white text-base font-medium leading-normal line-clamp-1">{ownerName ?? 'loading...'}</p>
                    <p className="text-accent-light text-sm font-normal leading-normal line-clamp-2">Current owner</p>
                </div>
            </div>
        </div>
    )
}
