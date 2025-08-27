using AutoMapper;
using RealEstate.PropertyCatalog.Core;
using Volo.Abp.AutoMapper;

namespace RealEstate.PropertyCatalog;

public class PropertyCatalogAutoMapperProfile : Profile
{
    public PropertyCatalogAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<Property, PropertyDto>()
            .Ignore(p => p.OwnerName);
    }
}
