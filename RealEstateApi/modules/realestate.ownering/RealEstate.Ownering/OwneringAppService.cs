using RealEstate.Ownering.Localization;
using Volo.Abp.Application.Services;

namespace RealEstate.Ownering;

public abstract class OwneringAppService : ApplicationService
{
    protected OwneringAppService()
    {
        LocalizationResource = typeof(OwneringResource);
        ObjectMapperContext = typeof(OwneringModule);
    }
}
