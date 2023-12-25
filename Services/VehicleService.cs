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

        public void Insert(VehicleDto vehicleDto)
        {
            var vehicle = _mapper.Map<Vehicle>(vehicleDto);
            _appDataContext.Vehicles.Add(vehicle);
            _appDataContext.SaveChanges();
        }

        public async Task<VehicleDto> UpdateVehicleAsync(VehicleDto vehicleDto)
        {
            var vehicle = await _appDataContext.Vehicles.FindAsync(vehicleDto.id);
            if (vehicle == null) return null;

            _mapper.Map(vehicleDto, vehicle);
            _appDataContext.Vehicles.Update(vehicle);
            await _appDataContext.SaveChangesAsync();

            return _mapper.Map<VehicleDto>(vehicle);
        }

        public async Task<bool> DeleteVehicleByIdAsync(int id)
        {
            var vehicleToDelete = await _appDataContext.Vehicles.FindAsync(id);
            if (vehicleToDelete == null)
            {
                return false;
            }

            _appDataContext.Vehicles.Remove(vehicleToDelete);
            var result = await _appDataContext.SaveChangesAsync();
            return result > 0;
        }
    }
}
