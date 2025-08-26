using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Volo.Abp.AspNetCore.Mvc.ApiExploring;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace RealEstateApi.Controllers
{
    public class ControllerExclusions : IApplicationModelConvention
    {
        public void Apply(ApplicationModel application)
        {
            application.Controllers.RemoveAll(x => x.ControllerType == typeof(AbpApplicationConfigurationController));
            application.Controllers.RemoveAll(x => x.ControllerType == typeof(AbpApiDefinitionController));
            application.Controllers.RemoveAll(x => x.ControllerType == typeof(AbpApplicationLocalizationController));
        }
    }
}
