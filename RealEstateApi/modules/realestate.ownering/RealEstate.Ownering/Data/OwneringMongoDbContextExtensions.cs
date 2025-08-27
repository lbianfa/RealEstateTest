using RealEstate.Ownering.Core;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace RealEstate.Ownering.Data;

public static class OwneringMongoDbContextExtensions
{
    public static void ConfigureOwnering(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));

        builder.Entity<Owner>(b =>
        {
            b.CollectionName = "Owners";
        });
    }
}
