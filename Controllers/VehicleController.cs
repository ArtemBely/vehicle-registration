using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;
using VehicleRegistration.Utils;

namespace VehicleRegistration.Controllers
{
    [Route("/api/v1/user")]
    [ApiController]
    [Authorize(Roles = RolesConstant.USER)]
    public class VehicleController : ControllerBase
    {

        private IPostService _postService;

        private IVehicleService _vehicleService;

        public VehicleController(IPostService postService, IVehicleService vehicleService)
        {
            _postService = postService;
            _vehicleService = vehicleService;
        }

        [HttpPost]
        public PostModel Create(PostModel model)
        {
           return  _postService.Create(model);
        }

        [HttpPatch]
        public PostModel Update(PostModel model)
        {
            return _postService.Update(model);
        }

        [HttpGet("{id}")]
        public object Get(int id)
        {
            return _postService.Get(id);
        }

        [HttpGet]
        [Route("vehicle")]
        public IEnumerable<VehicleDto> GetAll()
        {
            return _vehicleService.Get();
        }

        [HttpGet]
        [Route("test")]
        public string test()
        {
            return "Hello";
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postService.Delete(id);
            return Ok();
        }
    }
}
