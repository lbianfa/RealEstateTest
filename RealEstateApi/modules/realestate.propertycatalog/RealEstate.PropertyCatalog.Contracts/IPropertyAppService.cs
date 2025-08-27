using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RealEstate.PropertyCatalog
{
    public interface IPropertyAppService : IApplicationService
    {
        Task<List<PropertyDto>> GetListAsync();
    }
}
