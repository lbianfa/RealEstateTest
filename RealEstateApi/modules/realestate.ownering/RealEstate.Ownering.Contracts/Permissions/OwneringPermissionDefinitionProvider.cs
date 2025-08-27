using RealEstate.Ownering.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace RealEstate.Ownering.Permissions;

public class OwneringPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(OwneringPermissions.GroupName, L("Permission:Ownering"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<OwneringResource>(name);
    }
}
