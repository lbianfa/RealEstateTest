using RealEstate.Ownering.Tests;
using Microsoft.AspNetCore.Builder;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
builder.Environment.ContentRootPath = GetWebProjectContentRootPathHelper.Get("RealEstate.Ownering.csproj"); 
await builder.RunAbpModuleAsync<OwneringTestsModule>(applicationName: "RealEstate.Ownering");

public partial class TestProgram
{
}
