import { PropertiesCard } from "../../features/properties/properties-card";

export const PropertiesList = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-[160px] pb-4">
            <PropertiesCard />
            <PropertiesCard />
            <PropertiesCard />
            <PropertiesCard />
            <PropertiesCard />
            <PropertiesCard />
            <PropertiesCard />
        </div>
    )
}