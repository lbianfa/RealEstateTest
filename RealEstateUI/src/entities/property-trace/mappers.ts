import type { PropertyTraceDto } from "./dtos"
import type { PropertyTrace } from "./model"

export const mapPropertyTraceDtoToModel = (dto: PropertyTraceDto): PropertyTrace => {
    return {
        id: dto.id,
        dateSale: new Date(dto.dateSale || ""),
        name: dto.name,
        value: dto.value,
    }
}

export const mapPropertyTraceDtosToModel = (dtos: PropertyTraceDto[]): PropertyTrace[] => {
    return dtos.map(mapPropertyTraceDtoToModel);
}
