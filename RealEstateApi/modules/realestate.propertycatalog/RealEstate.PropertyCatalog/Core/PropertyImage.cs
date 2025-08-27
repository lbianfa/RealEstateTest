using System;
using Volo.Abp.Domain.Entities;

namespace RealEstate.PropertyCatalog.Core
{
    public class PropertyImage : Entity<Guid>
    {
        public Guid IdProperty { get; set; }

        public string File { get; set; }

        public bool Enabled { get; set; }
    }
}
