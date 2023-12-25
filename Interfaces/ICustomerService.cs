using Microsoft.AspNetCore.Identity;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration.Interfaces
{
    public interface ICustomerService
    {
        Task<List<ProfileDto>> GetCustomersAsync();

        Task<ProfileDto> UpdateCustomerByEmailAsync(ProfileDto updatedCustomer);

        Task<bool> DeleteCustomerByEmailAsync(string email);

    }
}
