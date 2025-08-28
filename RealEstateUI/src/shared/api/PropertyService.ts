import { http } from "./http";
import { endpoints } from "./endpoints";
import type { PropertyDto } from "../../entities/property/dto";
import type { Property } from "../../entities/property/model";
import { mapPropertiesDtoToModel } from "../../entities/property/mappers";

interface PaginatedResponse<T> {
    totalCount: number;
    items: T[];
}

export interface GetPropertiesQuery {
    maxResultCount?: number | string;
    skipCount?: number | string;
    name?: string;
    address?: string;
    minPrice?: number | string;
    maxPrice?: number | string;
}

export const getAllProperties = async (query?: GetPropertiesQuery) : Promise<PaginatedResponse<Property>> => {
    const { data } = await http.get<PaginatedResponse<PropertyDto>>(endpoints.properties, {
        params: {
            MaxResultCount: query?.maxResultCount,
            SkipCount: query?.skipCount,
            Name: query?.name,
            Address: query?.address,
            MinPrice: query?.minPrice,
            MaxPrice: query?.maxPrice,
        },
    });
    return {
        totalCount: data.totalCount,
        items: mapPropertiesDtoToModel(data.items),
    };
}
