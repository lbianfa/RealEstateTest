using RealEstate.PropertyCatalog.Tests;
using Microsoft.AspNetCore.Builder;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
builder.Environment.ContentRootPath = GetWebProjectContentRootPathHelper.Get("RealEstate.PropertyCatalog.csproj"); 
await builder.RunAbpModuleAsync<PropertyCatalogTestsModule>(applicationName: "RealEstate.PropertyCatalog");

public partial class TestProgram
{
}
