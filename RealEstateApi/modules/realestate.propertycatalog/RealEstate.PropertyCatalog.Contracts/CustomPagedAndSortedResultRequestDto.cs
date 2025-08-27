using Volo.Abp.Application.Dtos;

namespace RealEstate.PropertyCatalog
{
    public class CustomPagedAndSortedResultRequestDto : PagedAndSortedResultRequestDto
    {
        public CustomPagedAndSortedResultRequestDto()
        {
            MaxResultCount = 10;
        }

        public string? Name { get; set; }

        public string? Address { get; set; }

        public decimal? MinPrice { get; set; }

        public decimal? MaxPrice { get; set; }
    }
}
