using RealEstate.Ownering.Integration;
using RealEstate.PropertyCatalog.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace RealEstate.PropertyCatalog.AppServices
{
    public class PropertyAppService : PropertyCatalogAppService, IPropertyAppService
    {
        private readonly IRepository<Property, Guid> _propertyRepository;

        private readonly IOwnerIntegrationService _ownerIntegrationService;

        public PropertyAppService(IRepository<Property, Guid> propertyRepository, IOwnerIntegrationService ownerIntegrationService)
        {
            _propertyRepository = propertyRepository;
            _ownerIntegrationService = ownerIntegrationService;
        }

        public async Task<List<PropertyDto>> GetListAsync()
        {
            var properties = await _propertyRepository.GetListAsync();

            var ownerIds = properties.Select(p => p.IdOwner).Distinct().ToList();
            var owners = (await _ownerIntegrationService
                .GetOwnersByIdsAsync(ownerIds))
                .ToDictionary(p => p.Id, p => p.Name);

            var propertyDtos = ObjectMapper.Map<List<Property>, List<PropertyDto>>(properties);

            propertyDtos.ForEach(p =>
            {
                p.OwnerName = owners[p.IdOwner];
            });

            return propertyDtos;
        }
    }
}
