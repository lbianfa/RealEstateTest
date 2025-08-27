using RealEstate.PropertyCatalog.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace RealEstate.PropertyCatalog.Permissions;

public class PropertyCatalogPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(PropertyCatalogPermissions.GroupName, L("Permission:PropertyCatalog"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<PropertyCatalogResource>(name);
    }
}
