using RealEstate.Ownering.Integrations;
using RealEstate.PropertyCatalog.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;

namespace RealEstate.PropertyCatalog.AppServices
{
    public class PropertyAppService : PropertyCatalogAppService, IPropertyAppService
    {
        private readonly IRepository<Property, Guid> _propertyRepository;

        private readonly IRepository<PropertyImage, Guid> _propertyImageRepository;

        private readonly IOwnerIntegrationService _ownerIntegrationService;

        public PropertyAppService(IRepository<Property, Guid> propertyRepository, IRepository<PropertyImage, Guid> propertyImageRepository, IOwnerIntegrationService ownerIntegrationService)
        {
            _propertyRepository = propertyRepository;
            _propertyImageRepository = propertyImageRepository;
            _ownerIntegrationService = ownerIntegrationService;
        }

        public async Task<PagedResultDto<PropertyDto>> GetListAsync(CustomPagedAndSortedResultRequestDto input)
        {
            var queryable = await _propertyRepository.GetQueryableAsync();

            if (!string.IsNullOrWhiteSpace(input.Name))
            {
                queryable = queryable.Where(p => p.Name.ToLower().Contains(input.Name.ToLower()));
            }

            if (input.MinPrice.HasValue)
            {
                queryable = queryable.Where(p => p.Price >= input.MinPrice.Value);
            }

            if (input.MaxPrice.HasValue)
            {
                queryable = queryable.Where(p => p.Price <= input.MaxPrice.Value);
            }

            if (!string.IsNullOrWhiteSpace(input.Address))
            {
                queryable = queryable.Where(p => p.Address.ToLower().Contains(input.Address.ToLower()));
            }

            // Sorting
            if (!string.IsNullOrWhiteSpace(input.Sorting))
            {
                // Simple sorting by known fields. Extend as needed.
                var sorting = input.Sorting.Trim();
                var descending = sorting.StartsWith("-");
                var sortField = descending ? sorting.Substring(1) : sorting;

                queryable = sortField switch
                {
                    nameof(Property.Name) => (descending ? queryable.OrderByDescending(p => p.Name) : queryable.OrderBy(p => p.Name)),
                    nameof(Property.Price) => (descending ? queryable.OrderByDescending(p => p.Price) : queryable.OrderBy(p => p.Price)),
                    nameof(Property.Year) => (descending ? queryable.OrderByDescending(p => p.Year) : queryable.OrderBy(p => p.Year)),
                    nameof(Property.CodeInternal) => (descending ? queryable.OrderByDescending(p => p.CodeInternal) : queryable.OrderBy(p => p.CodeInternal)),
                    nameof(Property.Address) => (descending ? queryable.OrderByDescending(p => p.Address) : queryable.OrderBy(p => p.Address)),
                    _ => queryable.OrderBy(p => p.Name)
                };
            }
            else
            {
                queryable = queryable.OrderBy(p => p.Name);
            }

            var totalCount = queryable.Count();

            var items = queryable
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount)
                .ToList();

            var ownerIds = items.Select(p => p.IdOwner).Distinct().ToList();
            var owners = (await _ownerIntegrationService
                .GetOwnersByIdsAsync(ownerIds))
                .ToDictionary(p => p.Id, p => p);

            var propertyDtos = ObjectMapper.Map<List<Property>, List<PropertyDto>>(items);

            // Fetch images in batch to minimize queries
            var propertyIds = items.Select(p => p.Id).ToList();
            var images = await _propertyImageRepository.GetListAsync(pi => propertyIds.Contains(pi.IdProperty) && pi.Enabled == true);
            var imageByProperty = images
                .GroupBy(i => i.IdProperty)
                .ToDictionary(g => g.Key, g => g.FirstOrDefault());

            foreach (var dto in propertyDtos)
            {
                if (owners.TryGetValue(dto.IdOwner, out var owner))
                {
                    dto.OwnerName = owner?.Name ?? string.Empty;
                    dto.OwnerPhoto = owner?.Photo ?? string.Empty;
                }
                else
                {
                    dto.OwnerName = string.Empty;
                    dto.OwnerPhoto = string.Empty;
                }
                dto.Picture = imageByProperty.TryGetValue(dto.Id, out var img) ? (img?.File ?? string.Empty) : string.Empty;
            }

            return new PagedResultDto<PropertyDto>(totalCount, propertyDtos);
        }

        public async Task<PropertyDto> GetAsync(Guid id)
        {
            var property = await _propertyRepository.GetAsync(id);
            var owner = await _ownerIntegrationService.GetOwnerByIdAsync(property.IdOwner);
            var images = await _propertyImageRepository.FirstOrDefaultAsync(pi => pi.IdProperty == id && pi.Enabled == true);
            var propertyDto = ObjectMapper.Map<Property, PropertyDto>(property);
            propertyDto.OwnerName = owner.Name;
            propertyDto.OwnerPhoto = owner.Photo;
            propertyDto.Picture = images?.File ?? string.Empty;
            return propertyDto;
        }
    }
}
