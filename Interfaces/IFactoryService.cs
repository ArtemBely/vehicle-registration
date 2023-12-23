using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration.Interfaces
{
    public interface IFactoryService
    {
        List<FactoryDto> Get();
    }
}
