namespace RealEstate.PropertyCatalog;

public static class PropertyCatalogDbProperties
{
    public static string DbTablePrefix { get; set; } = "PropertyCatalog";

    public static string? DbSchema { get; set; } = null;

    public const string ConnectionStringName = "PropertyCatalog";
}
