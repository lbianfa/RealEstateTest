using RealEstate.PropertyCatalog.Localization;
using Volo.Abp.Application.Services;

namespace RealEstate.PropertyCatalog;

public abstract class PropertyCatalogAppService : ApplicationService
{
    protected PropertyCatalogAppService()
    {
        LocalizationResource = typeof(PropertyCatalogResource);
        ObjectMapperContext = typeof(PropertyCatalogModule);
    }
}
