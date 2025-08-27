using System;
using Volo.Abp.Domain.Entities;

namespace RealEstate.Ownering.Core
{
    public class Owner : Entity<Guid>
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public string Photo { get; set; }

        public DateTime BirthDay { get; set; }
    }
}
