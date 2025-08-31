using System;
using Volo.Abp.Application.Dtos;

namespace RealEstate.PropertyCatalog
{
    public class PropertyTraceDto : EntityDto<Guid>
    {
        public DateTime DateSale { get; set; }

        public string Name { get; set; }

        public Decimal Value { get; set; }
    }
}
