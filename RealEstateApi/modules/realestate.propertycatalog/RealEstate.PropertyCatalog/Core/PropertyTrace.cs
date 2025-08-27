using System;
using Volo.Abp.Domain.Entities;

namespace RealEstate.PropertyCatalog.Core
{
    public class PropertyTrace : Entity<Guid>
    {
        public DateTime DateSale { get; set; }

        public string Name { get; set; }

        public Decimal Value { get; set; }

        public string Tax { get; set; }

        public Guid IdProperty { get; set; }
    }
}
