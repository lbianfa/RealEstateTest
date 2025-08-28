import { PropertiesHeader } from "../../features/properties/properties-header";
import { PropertiesList } from "../../widgets/properties-list";
import { useInfiniteProperties } from "./query";

export const PropertiesPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteProperties(5);
  const items = data?.pages.flatMap((p) => p.items) ?? [];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-primary dark group/design-root overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
        <PropertiesHeader />

        <PropertiesList
          properties={items}
          onLoadMore={() => fetchNextPage()}
          hasNextPage={!!hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
    </div>
  )
}
