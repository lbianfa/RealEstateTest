using MongoDB.Driver;
using RealEstate.Ownering.Core;
using RealEstate.Ownering.Data;
using RealEstate.PropertyCatalog.Core;
using RealEstate.PropertyCatalog.Data;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MongoDB;

namespace RealEstateApi.Data;

[ConnectionStringName("Default")]
[ReplaceDbContext(typeof(IOwneringMongoDbContext))]
[ReplaceDbContext(typeof(IPropertyCatalogMongoDbContext))]
public class RealEstateApiDbContext : AbpMongoDbContext, IOwneringMongoDbContext, IPropertyCatalogMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */
    public IMongoCollection<Owner> Owners => Collection<Owner>();

    public IMongoCollection<Property> Properties => Collection<Property>();

    public IMongoCollection<PropertyImage> PropertyImages => Collection<PropertyImage>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        //builder.Entity<YourEntity>(b =>
        //{
        //    //...
        //});
    }
}
