import { useQuery } from "@tanstack/react-query"
import { getPropertyTracesByPropertyId } from "../../../shared/api/PropertyTraceService"

export const usePropertyTracesByPropertyId = (propertyId: string) => {
    return useQuery({
        queryKey: ["property-traces", propertyId],
        queryFn: () => getPropertyTracesByPropertyId(propertyId),
    })
}
