import type { PropertyDto } from "./dto";
import type { Property } from "./model";

export const mapPropertyDtoToModel = (dto: PropertyDto): Property => {
  return {
    id: dto.id,
    name: dto.name,
    addressProperty: dto.addressProperty,
    priceProperty: Number(dto.priceProperty),
    ownerName: dto.ownerName,
    ownerPhoto: dto.ownerPhoto,
    picture: dto.picture,
  };
};

export const mapPropertiesDtoToModel = (dtos: PropertyDto[]): Property[] =>
  dtos.map(mapPropertyDtoToModel);
