import { http } from "./http";
import type { PropertyTraceDto } from "../../entities/property-trace/dtos";
import { mapPropertyTraceDtosToModel } from "../../entities/property-trace/mappers";
import { endpoints } from "./endpoints";

export const getPropertyTracesByPropertyId = async (propertyId: string) => {
    const { data } = await http.get<{items: PropertyTraceDto[]}>(`${endpoints.propertyTrace}/by-property-id/${propertyId}`);
    return mapPropertyTraceDtosToModel(data.items);
}
