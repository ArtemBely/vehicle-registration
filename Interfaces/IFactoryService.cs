using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration.Interfaces
{
    public interface IFactoryService
    {
        List<FactoryDto> Get();

        void Insert(FactoryDto factoryDto);

        Task<FactoryDto> UpdateFactoryAsync(FactoryDto factoryDto);

        Task<bool> DeleteFactoryByIdAsync(int id);
    }
}
