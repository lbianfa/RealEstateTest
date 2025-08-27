using RealEstate.Ownering.Core;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace RealEstate.Ownering.AppServices
{
    public class OwnerAppService : OwneringAppService, IOwnerAppService
    {
        private readonly IRepository<Owner, Guid> _ownerRepository;

        public OwnerAppService(IRepository<Owner, Guid> ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        public async Task<List<OwnerDto>> GetListAsync()
        {
            var owners = await _ownerRepository.GetListAsync();
            return ObjectMapper.Map<List<Owner>, List<OwnerDto>>(owners);
        }
    }
}
