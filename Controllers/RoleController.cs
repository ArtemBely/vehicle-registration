using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;
using VehicleRegistration.Services;

namespace VehicleRegistration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {

        private IRoleService _roleService;

        public RoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        [HttpGet]
        public IEnumerable<Role> GetAll()
        {
            Console.WriteLine("roles...");
            return _roleService.Get();
        }
    }
}
