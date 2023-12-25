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

        [HttpGet]
        [Route("vehicle")]
        public IEnumerable<VehicleDto> GetAll()
        {
            return _vehicleService.Get();
        }

        [HttpPost]
        [Route("new_vehicle")]
        public IActionResult Insert([FromBody] VehicleDto vehicleDto)
        {
            _vehicleService.Insert(vehicleDto);
            return Ok();
        }


        [HttpPut]
        [Route("vehicle/update")]
        public async Task<IActionResult> EditVehicle([FromBody] VehicleDto updatedVehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _vehicleService.UpdateVehicleAsync(updatedVehicle);
                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return NotFound($"Vehicle with ID {updatedVehicle.id} not found.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex);
            }
        }

        [HttpDelete("vehicle/delete")]
        public async Task<IActionResult> DeleteVehicle([FromQuery] int id)
        {
            bool deleteResult = await _vehicleService.DeleteVehicleByIdAsync(id);
            if (deleteResult)
            {
                return Ok();
            }
            else
            {
                return NotFound($"Vehicle with ID {id} not found.");
            }
        }
    }
}
