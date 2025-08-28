using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RealEstate.Ownering.Core;
using RealEstate.Ownering.Integrations;
using Shouldly;
using Volo.Abp.Domain.Repositories;
using Xunit;
using Microsoft.Extensions.DependencyInjection;

namespace RealEstate.Ownering.Tests.Integrations
{
    public class OwnerIntegrationService_Tests : OwneringIntegrationTestBase
    {
        [Fact]
        public async Task GetOwnersByIdsAsync_returns_only_requested_owners()
        {
            // Arrange
            var repository = ServiceProvider.GetRequiredService<IRepository<Owner, Guid>>();
            var service = ServiceProvider.GetRequiredService<IOwnerIntegrationService>();

            Guid ownerId1 = Guid.Empty;
            Guid ownerId2 = Guid.Empty;

            await WithUnitOfWorkAsync(async () =>
            {
                var aliceOwner = new Owner
                {
                    Name = "Alice",
                    Address = "123 Main St",
                    Photo = "alice.jpg",
                    BirthDay = new DateTime(1990, 1, 1)
                };
                await repository.InsertAsync(aliceOwner, autoSave: true);
                ownerId1 = aliceOwner.Id;

                var bobOwner = new Owner
                {
                    Name = "Bob",
                    Address = "456 Oak Ave",
                    Photo = "bob.jpg",
                    BirthDay = new DateTime(1985, 5, 20)
                };
                await repository.InsertAsync(bobOwner, autoSave: true);
                ownerId2 = bobOwner.Id;

                await repository.InsertAsync(new Owner
                {
                    Name = "Charlie",
                    Address = "789 Pine Rd",
                    Photo = "charlie.jpg",
                    BirthDay = new DateTime(1975, 9, 15)
                }, autoSave: true);
            });

            // Act
            var result = await service.GetOwnersByIdsAsync(new List<Guid> { ownerId1, ownerId2 });

            // Assert
            result.ShouldNotBeNull();
            result.Count.ShouldBe(2);
            result.Select(x => x.Id).OrderBy(x => x).ShouldBe(new[] { ownerId1, ownerId2 }.OrderBy(x => x));

            var alice = result.First(x => x.Id == ownerId1);
            alice.Name.ShouldBe("Alice");
            alice.Address.ShouldBe("123 Main St");
            alice.Photo.ShouldBe("alice.jpg");
            alice.BirthDay.ShouldBe(new DateTime(1990, 1, 1));

            var bob = result.First(x => x.Id == ownerId2);
            bob.Name.ShouldBe("Bob");
            bob.Address.ShouldBe("456 Oak Ave");
            bob.Photo.ShouldBe("bob.jpg");
            bob.BirthDay.ShouldBe(new DateTime(1985, 5, 20));
        }
    }
}
