using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;

namespace VehicleRegistration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {

        private IPostService _postService;

        public VehicleController(IPostService postService)
        {
            _postService = postService;
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
        public IEnumerable<PostModel> GetAll()
        {
            return _postService.Get();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postService.Delete(id);
            return Ok();
        }
    }
}
