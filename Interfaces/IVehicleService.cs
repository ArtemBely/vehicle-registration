using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration.Interfaces
{
    public interface IVehicleService
    {
        List<VehicleDto> Get();
    }
}
