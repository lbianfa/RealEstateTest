using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using RealEstate.Ownering.Integrations;
using RealEstate.Ownering;
using RealEstate.PropertyCatalog.AppServices;
using RealEstate.PropertyCatalog.Core;
using Shouldly;
using Volo.Abp.Domain.Repositories;
using NSubstitute;
using Xunit;

namespace RealEstate.PropertyCatalog.Tests.ApplicationServices;

public class PropertyAppService_Tests : PropertyCatalogIntegrationTestBase
{
    [Fact]
    public async Task GetListAsync_Should_Paginate_Filter_And_Enrich()
    {
        // Arrange
        var propertyRepo = ServiceProvider.GetRequiredService<IRepository<Property, Guid>>();
        var propertyImageRepo = ServiceProvider.GetRequiredService<IRepository<PropertyImage, Guid>>();
        var ownerSvc = ServiceProvider.GetRequiredService<IOwnerIntegrationService>();

        var ownerId1 = Guid.NewGuid();
        var ownerId2 = Guid.NewGuid();

        await WithUnitOfWorkAsync(async () =>
        {
            await propertyRepo.InsertManyAsync(new List<Property>
            {
                new Property { Name = "Alpha House", Address = "Main St 1", Price = 100000, CodeInternal = 1, Year = 2000, IdOwner = ownerId1 },
                new Property { Name = "Bravo House", Address = "Main St 2", Price = 200000, CodeInternal = 2, Year = 2005, IdOwner = ownerId2 },
                new Property { Name = "Charlie Flat", Address = "2nd Ave", Price = 150000, CodeInternal = 3, Year = 2010, IdOwner = ownerId1 },
            }, autoSave: true);

            var all = await propertyRepo.GetListAsync();
            await propertyImageRepo.InsertAsync(new PropertyImage { IdProperty = all[0].Id, Enabled = true, File = "img-a" }, autoSave: true);
            await propertyImageRepo.InsertAsync(new PropertyImage { IdProperty = all[1].Id, Enabled = false, File = "img-b-disabled" }, autoSave: true);
        });

        ownerSvc.GetOwnersByIdsAsync(Arg.Any<List<Guid>>()).Returns(call =>
        {
            var ids = call.Arg<List<Guid>>();
            return Task.FromResult(ids.Distinct().Select(id => new OwnerDto { Id = id, Name = id == ownerId1 ? "Alice" : "Bob" }).ToList());
        });

        var app = ServiceProvider.GetRequiredService<IPropertyAppService>();

        // Act: filter by Address contains "Main", page size 2
        var result = await app.GetListAsync(new CustomPagedAndSortedResultRequestDto
        {
            Address = "Main",
            MaxResultCount = 2,
            SkipCount = 0,
            Sorting = nameof(Property.Name)
        });

        // Assert
        result.ShouldNotBeNull();
        result.TotalCount.ShouldBe(2);
        result.Items.Count.ShouldBe(2);

        // Enrichment
        var alpha = result.Items.First(i => i.Name.Contains("Alpha"));
        alpha.OwnerName.ShouldBe("Alice");
        alpha.Picture.ShouldBe("img-a");

        var bravo = result.Items.First(i => i.Name.Contains("Bravo"));
        bravo.OwnerName.ShouldBe("Bob");
        bravo.Picture.ShouldBe(string.Empty); // disabled image ignored
    }
}

