import { PropertiesHeader } from "../../features/properties/properties-header";
import { PropertiesList } from "../../widgets/properties-list";
import { useProperties } from "./query";

export const PropertiesPage = () => {
  const { data: properties } = useProperties();

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-primary dark group/design-root overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
        <PropertiesHeader />

        <PropertiesList properties={properties.items} />
    </div>
  )
}
