using AutoMapper;
using RealEstate.Ownering.Core;

namespace RealEstate.Ownering;

public class OwneringAutoMapperProfile : Profile
{
    public OwneringAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<Owner, OwnerDto>();
    }
}
