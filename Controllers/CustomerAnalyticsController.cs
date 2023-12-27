using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;
using VehicleRegistration.Services;
using VehicleRegistration.Utils;

namespace VehicleRegistration.Controllers
{
    [Route("/api/v1/admin")]
    [ApiController]
    [Authorize(Roles = RolesConstant.ADMIN)]
    public class CustomerAnalyticsController : Controller
    {

        private ICustomerService _customerService;

        private IAuthService _authService;

        public CustomerAnalyticsController(ICustomerService customerService, IAuthService authService)
        {
            _customerService = customerService;
            _authService = authService;
        }

        [HttpGet]
        [Route("analytics/customers")]
        public Task<List<ProfileDtoWithAdminStatus>> GetAll()
        {
            Console.WriteLine("customers...");
            return _customerService.GetCustomersAsync();
        }

        [HttpPut]
        [Route("analytics/customers/update")]
        public async Task<IActionResult> UpdateCustomer([FromBody] ProfileDto updatedCustomer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _customerService.UpdateCustomerByEmailAsync(updatedCustomer);
                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return NotFound($"User with email {updatedCustomer.Email} not found.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex);
            }
        }

        [HttpPost]
        [Route("analytics/customers/create")]
        public async Task<IActionResult> Register([FromBody] CustomerDto customerDto)
        {
            var registerResult = await _authService.RegisterAsync(customerDto);

            if (registerResult.IsSucceed)
                return Ok(registerResult);

            return BadRequest(registerResult);
        }

        [HttpDelete]
        [Route("analytics/customers/delete")]
        public async Task<IActionResult> DeleteCustomer([FromQuery] string email)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _customerService.DeleteCustomerByEmailAsync(email);
                if (result)
                {
                    return Ok($"User with email {email} has been deleted.");
                }
                else
                {
                    return NotFound($"User with email {email} not found.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex);
            }
        }
    }
}
