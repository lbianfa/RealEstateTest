import { useParams } from "react-router"
import { PropertyData } from "../../features/property-details/property-data"
import { PropertyDetailsOwner } from "../../features/property-details/owner"
import { PropertyDetailHistoric } from "../../widgets/property-details/historic"
import { usePropertyDetails } from "./query"
import { PropertyDetailsHeader } from "../../features/property-details/header"

export const PropertyDetailsPage = () => {
    const { id } = useParams()
    const { data: propertyDetails } = usePropertyDetails(id!)

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-primary dark overflow-hidden">
            <PropertyDetailsHeader />
            <div className="pt-[70px]">
                <PropertyData property={propertyDetails} />
                <PropertyDetailsOwner ownerName={propertyDetails?.ownerName} ownerPhoto={propertyDetails?.ownerPhoto} />
                <PropertyDetailHistoric propertyId={id!} />
            </div>
        </div>
    )
}
