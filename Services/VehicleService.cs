using AutoMapper;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;

namespace VehicleRegistration.Services
{
    public class VehicleService : IVehicleService
    {

        private AppDataContext _appDataContext;

        private readonly IMapper _mapper;

        public VehicleService(AppDataContext appDataContext, IMapper mapper)
        {
            _appDataContext = appDataContext;
            _mapper = mapper;
        }

        public List<VehicleDto> Get()
        {
            var vehicles = _appDataContext.Vehicles.ToList();
            return _mapper.Map<List<VehicleDto>>(vehicles);
        }
    }
}
