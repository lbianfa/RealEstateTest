using Volo.Abp.Reflection;

namespace RealEstate.Ownering.Permissions;

public class OwneringPermissions
{
    public const string GroupName = "Ownering";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(OwneringPermissions));
    }
}
