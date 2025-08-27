using System;

namespace RealEstate.PropertyCatalog
{
    public class PropertyCreationDto
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public Decimal Price { get; set; }

        public ulong CodeInternal { get; set; }

        public uint Year { get; set; }

        public Guid IdOwner { get; set; }
    }
}
