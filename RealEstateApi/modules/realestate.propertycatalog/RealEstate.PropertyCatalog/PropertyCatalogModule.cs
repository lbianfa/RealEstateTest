using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.MongoDB;
using RealEstate.PropertyCatalog.Data;
using Volo.Abp.AspNetCore.Mvc;

namespace RealEstate.PropertyCatalog;

[DependsOn(
    typeof(PropertyCatalogContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpMongoDbModule)
)]
public class PropertyCatalogModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(PropertyCatalogModule).Assembly);
        });
    }
    
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<PropertyCatalogModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<PropertyCatalogModule>(validate: true);
        });

        Configure<AbpAspNetCoreMvcOptions>(options =>
        {
            options.ConventionalControllers.Create(typeof(PropertyCatalogModule).Assembly, settings =>
            {
                settings.RootPath = "propertycatalog";
            });
        });

        context.Services.AddMongoDbContext<PropertyCatalogMongoDbContext>(options =>
        {
            options.AddDefaultRepositories(includeAllEntities: true);

            /* Add custom repositories here. Example:
             * options.AddRepository<Question, MongoQuestionRepository>();
             */
        });
    }
}
