using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration.Interfaces
{
    public interface IVehicleService
    {
        List<VehicleDto> Get();

        void Insert(VehicleDto vehicleDto);

        Task<VehicleDto> UpdateVehicleAsync(VehicleDto vehicleDto);

        Task<bool> DeleteVehicleByIdAsync(int id);
    }
}
