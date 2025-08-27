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

        public PropertyAppService(IRepository<Property, Guid> propertyRepository)
        {
            _propertyRepository = propertyRepository;
        }

        public async Task<List<PropertyDto>> GetListAsync()
        {
            var properties = await _propertyRepository.GetListAsync();
            return ObjectMapper.Map<List<Property>, List<PropertyDto>>(properties);
        }
    }
}
