using AutoMapper;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;

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

        public void Insert(FactoryDto factoryDto)
        {
            var factory = _mapper.Map<Factory>(factoryDto);
            _appDataContext.Factories.Add(factory);
            _appDataContext.SaveChanges();
        }

        public async Task<FactoryDto> UpdateFactoryAsync(FactoryDto factoryDto)
        {
            var factory = await _appDataContext.Factories.FindAsync(factoryDto.id);
            if (factory == null) return null;

            _mapper.Map(factoryDto, factory);
            _appDataContext.Factories.Update(factory);
            await _appDataContext.SaveChangesAsync();

            return _mapper.Map<FactoryDto>(factory);
        }

        public async Task<bool> DeleteFactoryByIdAsync(int id)
        {
            var factoryToDelete = await _appDataContext.Factories.FindAsync(id);
            if (factoryToDelete == null)
            {
                return false;
            }

            _appDataContext.Factories.Remove(factoryToDelete);
            var result = await _appDataContext.SaveChangesAsync();
            return result > 0;
        }

        public async Task<bool> UpdateFactoryForVehicle(UdpateFactoryDto udpateFactoryDto)
        {
            var vehicle = await _appDataContext.Vehicles.FindAsync(udpateFactoryDto.vehicle_id);
            if (vehicle == null) return false;

            vehicle.factory_id = udpateFactoryDto.factory_id;
            _appDataContext.Vehicles.Update(vehicle);
            await _appDataContext.SaveChangesAsync();

            return true;
        }

    }
}
