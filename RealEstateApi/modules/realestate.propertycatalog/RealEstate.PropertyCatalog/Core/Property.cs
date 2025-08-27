using System;
using Volo.Abp.Domain.Entities;

namespace RealEstate.PropertyCatalog.Core
{
    public class Property : Entity<Guid>
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public Decimal Price { get; set; }

        public ulong CodeInternal { get; set; }

        public uint Year { get; set; }

        public Guid IdOwner { get; set; }
    }
}
