using RealEstate.PropertyCatalog.Core;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace RealEstate.PropertyCatalog.Data;

public static class PropertyCatalogMongoDbContextExtensions
{
    public static void ConfigurePropertyCatalog(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));

        builder.Entity<Property>(b =>
        {
            b.CollectionName = "Properties";
        });
    }
}
