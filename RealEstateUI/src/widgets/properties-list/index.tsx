import { PropertiesCard } from "../../features/properties/properties-card";
import type { Property } from "../../entities/property/model";

export const PropertiesList = ({ properties }: { properties: Property[] }) => {
    return (
        <div className="flex-1 overflow-y-auto pt-[160px] pb-4">
            {properties.map((property) => (
                <PropertiesCard key={property.id} property={property} />
            ))}
        </div>
    )
}