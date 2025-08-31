using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RealEstate.PropertyCatalog
{
    public interface IPropertyAppService : IApplicationService
    {
        Task<PagedResultDto<PropertyDto>> GetListAsync(CustomPagedAndSortedResultRequestDto input);
        Task<PropertyDto> GetAsync(Guid id);
    }
}
