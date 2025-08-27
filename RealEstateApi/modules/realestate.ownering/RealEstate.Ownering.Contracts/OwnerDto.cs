using System;
using Volo.Abp.Application.Dtos;

namespace RealEstate.Ownering
{
    public class OwnerDto : EntityDto<Guid>
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public string Photo { get; set; }

        public DateTime BirthDay { get; set; }
    }
}
