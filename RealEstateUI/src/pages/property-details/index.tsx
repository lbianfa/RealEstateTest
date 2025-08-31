import type { Property } from "../../entities/property/model"
import { useEffect, useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router"
import { PropertyData } from "../../features/property-details/property-data"
import { PropertyDetailsOwner } from "../../features/property-details/owner"
import { PropertyDetailHistoric } from "../../widgets/property-details/historic"
import { PropertyDetailsHeader } from "../../features/property-details/header"
import { usePropertyDetails } from "./query"

export const PropertyDetailsPage = () => {
    const { id } = useParams()
    const state = useLocation().state
    const navigate = useNavigate()
    const { data: propertyDetails, isError } = usePropertyDetails(id!)
    const [propertyDetailsData, setPropertyDetailsData] = useState<Property | undefined>(state?.property?.id === id ? state.property : propertyDetails)


    useEffect(() => {
        if (isError) {
            navigate("/properties", { state: { errorLoadDetails: true, propertyIdError: id } })
        }
    }, [isError, navigate, state])

    useEffect(() => {
        if (propertyDetails) {
            setPropertyDetailsData(propertyDetails)
        }
    }, [propertyDetails])

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-primary dark overflow-hidden">
            <PropertyDetailsHeader />
            <div className="pt-[70px]">
                <PropertyData property={propertyDetailsData} />
                <PropertyDetailsOwner ownerName={propertyDetailsData?.ownerName} ownerPhoto={propertyDetailsData?.ownerPhoto} />
                <PropertyDetailHistoric propertyId={id!} />
            </div>
        </div>
    )
}
