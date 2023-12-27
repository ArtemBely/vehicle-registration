using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Utils;

namespace VehicleRegistration.Services
{
    public class CustomerAnalytics : ICustomerService
    {

        private readonly UserManager<ProfileDto> _userManager;

        public CustomerAnalytics(UserManager<ProfileDto> userManager)
        {
            _userManager = userManager;
        }

        //public async Task<List<ProfileDto>> GetCustomersAsync()
        //{
        //    return await _userManager.Users.ToListAsync();
        //}
        public async Task<List<ProfileDtoWithAdminStatus>> GetCustomersAsync()
        {
            var users = await _userManager.Users.ToListAsync();
            var userDtosWithAdminStatus = new List<ProfileDtoWithAdminStatus>();

            foreach (var user in users)
            {
                var roles = await _userManager.GetRolesAsync(user);
                var isAdmin = roles.Contains("ADMIN");

                userDtosWithAdminStatus.Add(new ProfileDtoWithAdminStatus
                {
                    FirstName = user.FirstName,
                    Surname = user.Surname,
                    Id = user.Id,
                    UserName = user.UserName,
                    Email = user.Email,
                    PhoneNumber = user.PhoneNumber,
                    IsAdmin = isAdmin
                });
            }

            return userDtosWithAdminStatus;
        }

        public async Task<ProfileDto> UpdateCustomerByEmailAsync(ProfileDto updatedCustomer)
        {
            var customerToUpdate = await _userManager.FindByEmailAsync(updatedCustomer.Email);
            if (customerToUpdate == null)
            {
                return null;
            }
            customerToUpdate.Email = updatedCustomer.Email;
            customerToUpdate.UserName = updatedCustomer.Email;
            customerToUpdate.FirstName = updatedCustomer.FirstName;
            customerToUpdate.Surname = updatedCustomer.Surname;
            customerToUpdate.PhoneNumber = updatedCustomer.PhoneNumber;

            var result = await _userManager.UpdateAsync(customerToUpdate);
            if (result.Succeeded)
            {
                return customerToUpdate;
            }
            return null;
        }

        public async Task<bool> DeleteCustomerByEmailAsync(string email)
        {
            var customerToDelete = await _userManager.FindByEmailAsync(email);
            if (customerToDelete == null)
            {
                return false;
            }

            var result = await _userManager.DeleteAsync(customerToDelete);
            return result.Succeeded;
        }

    }
}