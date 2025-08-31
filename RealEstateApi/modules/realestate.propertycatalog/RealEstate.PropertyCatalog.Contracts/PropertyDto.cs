using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace RealEstate.PropertyCatalog
{
    public class PropertyDto : EntityDto<Guid>
    {
        public string Name { get; set; }

        public string AddressProperty { get; set; }

        public Decimal PriceProperty { get; set; }

        public Guid IdOwner { get; set; }

        public string OwnerName { get; set; }

        public string OwnerPhoto { get; set; }

        public string Picture { get; set; }
    }
}
