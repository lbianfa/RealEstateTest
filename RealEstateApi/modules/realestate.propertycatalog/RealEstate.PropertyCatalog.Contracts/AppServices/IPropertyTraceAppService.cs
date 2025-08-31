using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace RealEstate.PropertyCatalog.AppServices
{
    public interface IPropertyTraceAppService
    {
        Task<ListResultDto<PropertyTraceDto>> GetByPropertyIdAsync(Guid propertyId);
    }
}
