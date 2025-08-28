import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllProperties, type GetPropertiesQuery } from "../../shared/api/PropertyService";

export function useProperties(query?: GetPropertiesQuery) {
  return useQuery({
    initialData: { totalCount: 0, items: [] },
    queryKey: [
      "properties",
      query?.maxResultCount ?? null,
      query?.skipCount ?? null,
      query?.name ?? null,
      query?.address ?? null,
    ],
    queryFn: () => getAllProperties(query),
  });
}

export function useInfiniteProperties(maxResultCount: number = 20) {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["properties", "infinite", maxResultCount],
    queryFn: ({ pageParam }) =>
      getAllProperties({ maxResultCount, skipCount: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.reduce((sum, page) => sum + page.items.length, 0);
      return loadedCount < lastPage.totalCount ? loadedCount : undefined;
    },
  });
}
