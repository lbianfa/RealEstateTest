using System.Threading.Tasks;
using Shouldly;
using Xunit;
using RealEstate.PropertyCatalog.Samples;

namespace RealEstate.PropertyCatalog.Tests.Controllers;

/* This is a demo test class to show how to test HTTP API controllers.
 * You can delete this class freely.
 *
 * See https://docs.abp.io/en/abp/latest/Testing for more about automated tests.
 */

public class ExampleController_Tests : PropertyCatalogIntegrationTestBase
{
    [Fact]
    public async Task GetAsync()
    {
        var response = await GetResponseAsObjectAsync<SampleDto>("api/PropertyCatalog/example");
        response.Value.ShouldBe(42);
    }
}