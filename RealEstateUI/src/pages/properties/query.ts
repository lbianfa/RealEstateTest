import { useQuery } from "@tanstack/react-query";
import { getAllProperties } from "../../shared/api/PropertyService";

export function useProperties() {
  return useQuery({
    initialData: { totalCount: 0, items: [] },
    queryKey: ["properties"],
    queryFn: getAllProperties,
  });
}
