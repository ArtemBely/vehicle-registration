using AutoMapper;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;

namespace VehicleRegistration.Services
{
    public class FactoryService : IFactoryService
    {
        private AppDataContext _appDataContext;

        private readonly IMapper _mapper;

        public FactoryService(AppDataContext appDataContext, IMapper mapper)
        {
            _appDataContext = appDataContext;
            _mapper = mapper;
        }

        public List<FactoryDto> Get()
        {
            var factories = _appDataContext.Factories.ToList();
            return _mapper.Map<List<FactoryDto>>(factories);
        }
    }
}
