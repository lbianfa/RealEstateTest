using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RealEstate.Ownering
{
    public interface IOwnerAppService : IApplicationService
    {
        Task<List<OwnerDto>> GetListAsync();
    }
}
