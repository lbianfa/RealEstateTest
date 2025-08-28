using RealEstate.Ownering.Core;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace RealEstate.Ownering.Integrations
{
    public class OwnerIntegrationService : OwneringAppService, IOwnerIntegrationService
    {
        private readonly IRepository<Owner, Guid> _ownerRepository;

        public OwnerIntegrationService(IRepository<Owner, Guid> ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        public async Task<List<OwnerDto>> GetOwnersByIdsAsync(List<Guid> ids)
        {
            var owners = await _ownerRepository.GetListAsync(p => ids.Contains(p.Id));

            return ObjectMapper.Map<List<Owner>, List<OwnerDto>>(owners);
        }
    }
}
