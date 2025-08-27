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

        public async Task CreateAsync(OwnerCreationDto input)
        {
            var newOwner = new Owner
            {
                Name = input.Name,
                Address = input.Address,
                Photo = input.Photo,
                BirthDay = new DateTime()
            };

            await _ownerRepository.InsertAsync(newOwner);
        }
    }
}
