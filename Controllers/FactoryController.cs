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

        [HttpPost]
        [Route("admin/factory/create")]
        [Authorize(Roles = RolesConstant.ADMIN)]
        public IActionResult Insert([FromBody] FactoryDto factoryDto)
        {
            _factoryService.Insert(factoryDto);
            return Ok();
        }

        [HttpPut]
        [Route("user/factory/edit")]
        [Authorize(Roles = RolesConstant.USER)]
        public async Task<IActionResult> UpdateFactory([FromBody] FactoryDto updatedFactory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _factoryService.UpdateFactoryAsync(updatedFactory);
                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return NotFound($"Factory with ID {updatedFactory.id} not found.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex);
            }
        }

        [HttpDelete]
        [Route("admin/factory/delete")]
        [Authorize(Roles = RolesConstant.ADMIN)]
        public async Task<IActionResult> DeleteFactory([FromQuery] int id)
        {
            bool deleteResult = await _factoryService.DeleteFactoryByIdAsync(id);
            if (deleteResult)
            {
                return Ok();
            }
            else
            {
                return NotFound($"Factory with ID {id} not found.");
            }
        }

    }
}
