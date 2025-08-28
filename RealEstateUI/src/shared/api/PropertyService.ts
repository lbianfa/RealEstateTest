import { http } from "./http";
import { endpoints } from "./endpoints";
import type { PropertyDto } from "../../entities/property/dto";
import type { Property } from "../../entities/property/model";
import { mapPropertiesDtoToModel } from "../../entities/property/mappers";

interface PaginatedResponse<T> {
    totalCount: number;
    items: T[];
}

export const getAllProperties = async () : Promise<PaginatedResponse<Property>> => {
    const { data } = await http.get<PaginatedResponse<PropertyDto>>(endpoints.properties);
    return {
        totalCount: data.totalCount,
        items: mapPropertiesDtoToModel(data.items),
    };
}
