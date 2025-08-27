using System.Threading.Tasks;
using Shouldly;
using Xunit;
using RealEstate.PropertyCatalog.Samples;

namespace RealEstate.PropertyCatalog.Tests.ApplicationServices;

/* This is a demo test class to show how to test application services.
 * You can delete this class freely.
 *
 * See https://docs.abp.io/en/abp/latest/Testing for more about automated tests.
 */

public class SampleAppService_Tests : PropertyCatalogIntegrationTestBase
{
    private readonly ISampleAppService _sampleAppService;

    public SampleAppService_Tests()
    {
        _sampleAppService = GetRequiredService<ISampleAppService>();
    }

    [Fact]
    public async Task GetAsync()
    {
        var result = await _sampleAppService.GetAsync();
        result.Value.ShouldBe(42);
    }

    [Fact]
    public async Task GetAuthorizedAsync()
    {
        var result = await _sampleAppService.GetAuthorizedAsync();
        result.Value.ShouldBe(42);
    }
}