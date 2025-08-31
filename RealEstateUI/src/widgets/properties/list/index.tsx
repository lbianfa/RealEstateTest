import { useEffect, useRef } from "react";
import { PropertiesCard } from "../../../features/properties/card";
import type { Property } from "../../../entities/property/model";
import Lottie from "lottie-react";
import emptyAnimation from "../../../assets/empty.json";
import searchingAnimation from "../../../assets/searching.json";

export const PropertiesList = ({
    properties,
    onLoadMore,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
}: {
    properties: Property[];
    onLoadMore?: () => void;
    hasNextPage?: boolean;
    isFetchingNextPage?: boolean;
    isLoading?: boolean;
}) => {
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!onLoadMore || !hasNextPage) return;
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !isFetchingNextPage) {
                onLoadMore();
            }
        });

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [onLoadMore, hasNextPage, isFetchingNextPage]);

    return (
        <div className="flex-1 overflow-y-auto pb-4">
            {properties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {properties.map((property) => (
                        <PropertiesCard key={property.id} property={property} />
                    ))}
                </div>
            ) : isLoading ? (
                <div className="flex items-center justify-center py-4 text-accent-light text-sm md:max-w-1/2 mx-auto">
                    <Lottie animationData={searchingAnimation} loop={true} />
                </div>
            ) : (
                <div className="flex items-center justify-center py-4 text-accent-light text-sm md:max-w-1/2 mx-auto">
                    <Lottie animationData={emptyAnimation} loop={true} />
                </div>
            )}
            <div ref={sentinelRef} />
            {isFetchingNextPage && (
                <div className="flex items-center justify-center py-4 text-accent-light text-sm">Loading more…</div>
            )}
            {!hasNextPage && (
                <div className="h-4" />
            )}
        </div>
    );
};
