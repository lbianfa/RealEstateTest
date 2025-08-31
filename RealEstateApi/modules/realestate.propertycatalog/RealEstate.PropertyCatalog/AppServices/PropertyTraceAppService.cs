using System;
using Volo.Abp.Domain.Repositories;
using RealEstate.PropertyCatalog.Core;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using System.Collections.Generic;

namespace RealEstate.PropertyCatalog.AppServices
{
    public class PropertyTraceAppService : PropertyCatalogAppService, IPropertyTraceAppService
    {
        private readonly IRepository<PropertyTrace, Guid> _propertyTraceRepository;

        public PropertyTraceAppService(IRepository<PropertyTrace, Guid> propertyTraceRepository)
        {
            _propertyTraceRepository = propertyTraceRepository;
        }

        public async Task<ListResultDto<PropertyTraceDto>> GetByPropertyIdAsync(Guid propertyId)
        {
            var propertyTraces = await _propertyTraceRepository.GetListAsync(pt => pt.IdProperty == propertyId);
            var propertyTracesDto = ObjectMapper.Map<List<PropertyTrace>, List<PropertyTraceDto>>(propertyTraces);
            return new ListResultDto<PropertyTraceDto> { Items = propertyTracesDto };
        }
    }
}
