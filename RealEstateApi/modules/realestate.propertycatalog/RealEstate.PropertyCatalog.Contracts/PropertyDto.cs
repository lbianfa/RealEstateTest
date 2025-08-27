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

        public string Address { get; set; }

        public Decimal Price { get; set; }

        public ulong CodeInternal { get; set; }

        public uint Year { get; set; }
    }
}
