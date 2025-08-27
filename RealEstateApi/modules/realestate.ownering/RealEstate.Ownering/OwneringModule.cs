using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.MongoDB;
using RealEstate.Ownering.Data;
using Volo.Abp.AspNetCore.Mvc;

namespace RealEstate.Ownering;

[DependsOn(
    typeof(OwneringContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpMongoDbModule)
)]
public class OwneringModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(OwneringModule).Assembly);
        });
    }
    
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<OwneringModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<OwneringModule>(validate: true);
        });

        //Configure<AbpAspNetCoreMvcOptions>(options =>
        //{
        //    options.ConventionalControllers.Create(typeof(OwneringModule).Assembly, settings =>
        //    {
        //        settings.RootPath = "ownering";
        //    });
        //});

        context.Services.AddMongoDbContext<OwneringMongoDbContext>(options =>
        {
            options.AddDefaultRepositories(includeAllEntities: true);
            
            /* Add custom repositories here. Example:
             * options.AddRepository<Question, MongoQuestionRepository>();
             */
        });
    }
}
