using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;
using VehicleRegistration.Utils;

namespace VehicleRegistration.Controllers
{
    [Route("/api/v1/admin")]
    [ApiController]
    [Authorize(Roles = RolesConstant.ADMIN)]
    public class CustomerAnalyticsController : Controller
    {
        private ICustomerService _customerService;

        public CustomerAnalyticsController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        [Route("analytics/customers")]
        public Task<List<ProfileDto>> GetAll()
        {
            Console.WriteLine("customers...");
            return _customerService.GetCustomersAsync();
        }
    }
}
