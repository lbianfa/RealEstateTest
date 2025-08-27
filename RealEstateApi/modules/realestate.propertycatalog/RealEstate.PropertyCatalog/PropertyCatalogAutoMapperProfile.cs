using AutoMapper;
using RealEstate.PropertyCatalog.Core;

namespace RealEstate.PropertyCatalog;

public class PropertyCatalogAutoMapperProfile : Profile
{
    public PropertyCatalogAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<Property, PropertyDto>();
    }
}
