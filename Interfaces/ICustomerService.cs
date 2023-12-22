using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration.Interfaces
{
    public interface ICustomerService
    {
        Task<List<ProfileDto>> GetCustomersAsync();
    }
}
