using System.ComponentModel.DataAnnotations;

namespace RealEstate.Ownering
{
    public class OwnerCreationDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string Photo { get; set; }
    }
}
