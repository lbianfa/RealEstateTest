using MongoDB.Driver;
using RealEstate.Ownering.Core;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace RealEstate.Ownering.Data;

[ConnectionStringName(OwneringDbProperties.ConnectionStringName)]
public interface IOwneringMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
    IMongoCollection<Owner> Owners { get; }
}
