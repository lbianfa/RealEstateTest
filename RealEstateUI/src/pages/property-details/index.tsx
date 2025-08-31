import type { Property } from "../../entities/property/model"
import { useCallback, useEffect, useState } from "react"
import { PropertyDetailsHeader } from "../../features/property-details/header"
import { useParams, useNavigate } from "react-router"
import { getPropertyById } from "../../shared/api/PropertyService"
import { PropertyData } from "../../features/property-details/property"
import { PropertyDetailsOwner } from "../../features/property-details/owner"

export const PropertyDetailsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [property, setProperty] = useState<Property | null>(null)

    const getProperty = useCallback(async (id: string) => {
        try {
            const property = await getPropertyById(id)
            setProperty(property)
        } catch (error) {
            navigate("/properties")
        }
    }, [id])

    useEffect(() => {
        if (id) {
            getProperty(id)
        }
    }, [id])

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-primary dark overflow-hidden">
            <PropertyDetailsHeader />
            <div className="pt-[70px]">
                <PropertyData property={property} />
                <PropertyDetailsOwner ownerName={property?.ownerName} ownerPhoto={property?.ownerPhoto} />
            </div>
        </div>
    )
}
