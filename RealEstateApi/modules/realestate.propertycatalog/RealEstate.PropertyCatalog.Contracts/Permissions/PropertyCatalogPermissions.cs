using Volo.Abp.Reflection;

namespace RealEstate.PropertyCatalog.Permissions;

public class PropertyCatalogPermissions
{
    public const string GroupName = "PropertyCatalog";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(PropertyCatalogPermissions));
    }
}
