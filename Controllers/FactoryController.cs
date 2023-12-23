using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Services;
using VehicleRegistration.Utils;

namespace VehicleRegistration.Controllers
{

    [Route("/api/v1")]
    [ApiController]
    public class FactoryController : Controller
    {
        private IFactoryService _factoryService;

        public FactoryController(IFactoryService factoryService)
        {
            _factoryService = factoryService;
        }

        [HttpGet]
        [Route("user/factories")]
        [Authorize(Roles = RolesConstant.USER)]
        public IEnumerable<FactoryDto> GetAll()
        {
            return _factoryService.Get();
        }

    }
}
