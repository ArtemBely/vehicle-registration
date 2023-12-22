using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;

namespace VehicleRegistration.Services
{
    public class CustomerAnalytics : ICustomerService
    {

        private readonly UserManager<ProfileDto> _userManager;

        public CustomerAnalytics(UserManager<ProfileDto> userManager)
        {
            _userManager = userManager;
        }

        public async Task<List<ProfileDto>> GetCustomersAsync()
        {
            return await _userManager.Users.ToListAsync();
        }
    }
}