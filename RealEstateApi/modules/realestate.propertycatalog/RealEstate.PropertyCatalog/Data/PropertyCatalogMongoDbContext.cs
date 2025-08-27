using MongoDB.Driver;
using RealEstate.PropertyCatalog.Core;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace RealEstate.PropertyCatalog.Data;

[ConnectionStringName(PropertyCatalogDbProperties.ConnectionStringName)]
public class PropertyCatalogMongoDbContext : AbpMongoDbContext, IPropertyCatalogMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */
    public IMongoCollection<Property> Properties => Collection<Property>();
    public IMongoCollection<PropertyImage> PropertyImages => Collection<PropertyImage>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigurePropertyCatalog();
    }
}
