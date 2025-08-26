using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace RealEstateApi;

[Dependency(ReplaceServices = true)]
public class RealEstateApiBrandingProvider : DefaultBrandingProvider
{
    public RealEstateApiBrandingProvider()
    {
    }

    public override string AppName => "RealEstateApi";
}