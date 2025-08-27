using MongoDB.Driver;
using RealEstate.PropertyCatalog.Core;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace RealEstate.PropertyCatalog.Data;

[ConnectionStringName(PropertyCatalogDbProperties.ConnectionStringName)]
public interface IPropertyCatalogMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
    IMongoCollection<Property> Properties { get; }

    IMongoCollection<PropertyImage> PropertyImages { get; }
}
