using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace RealEstate.Ownering.Integrations
{
    public interface IOwnerIntegrationService : IApplicationService
    {
        Task<List<OwnerDto>> GetOwnersByIdsAsync(List<Guid> ids);
    }
}
