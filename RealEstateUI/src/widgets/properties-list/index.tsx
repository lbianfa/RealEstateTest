import { useEffect, useRef } from "react";
import { PropertiesCard } from "../../features/properties/properties-card";
import type { Property } from "../../entities/property/model";

export const PropertiesList = ({
    properties,
    onLoadMore,
    hasNextPage,
    isFetchingNextPage,
}: {
    properties: Property[];
    onLoadMore?: () => void;
    hasNextPage?: boolean;
    isFetchingNextPage?: boolean;
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
        <div className="flex-1 overflow-y-auto pt-[160px] pb-4">
            {properties.map((property) => (
                <PropertiesCard key={property.id} property={property} />
            ))}
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