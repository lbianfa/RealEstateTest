using Microsoft.Extensions.Logging.Abstractions;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;

namespace RealEstateApi.Data;

public class RealEstateApiDbMigrationService : ITransientDependency
{
    public ILogger<RealEstateApiDbMigrationService> Logger { get; set; }

    private readonly IDataSeeder _dataSeeder;
    private readonly RealEstateApiDbSchemaMigrator _dbSchemaMigrator;
    private readonly ICurrentTenant _currentTenant;

    public RealEstateApiDbMigrationService(
        IDataSeeder dataSeeder,
        RealEstateApiDbSchemaMigrator dbSchemaMigrator,
        ICurrentTenant currentTenant)
    {
        _dataSeeder = dataSeeder;
        _dbSchemaMigrator = dbSchemaMigrator;
        _currentTenant = currentTenant;

        Logger = NullLogger<RealEstateApiDbMigrationService>.Instance;
    }

    public async Task MigrateAsync()
    {
        Logger.LogInformation("Started database migrations...");

        await MigrateDatabaseSchemaAsync();
        await SeedDataAsync();

        Logger.LogInformation($"Successfully completed host database migrations.");
        Logger.LogInformation("You can safely end this process...");
    }

    private async Task MigrateDatabaseSchemaAsync()
    {
        await _dbSchemaMigrator.MigrateAsync();
    }

    private async Task SeedDataAsync()
    {
    }
}
