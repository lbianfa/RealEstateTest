using MongoDB.Driver;
using RealEstate.Ownering.Core;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace RealEstate.Ownering.Data;

[ConnectionStringName(OwneringDbProperties.ConnectionStringName)]
public class OwneringMongoDbContext : AbpMongoDbContext, IOwneringMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */
    public IMongoCollection<Owner> Owners => Collection<Owner>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureOwnering();
    }
}
