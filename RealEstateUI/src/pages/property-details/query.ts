import { useQuery } from "@tanstack/react-query"
import { getPropertyById } from "../../shared/api/PropertyService"

export const usePropertyDetails = (propertyId: string) => {
    return useQuery({
        queryKey: ["property-details", propertyId],
        queryFn: () => getPropertyById(propertyId),
    })
}