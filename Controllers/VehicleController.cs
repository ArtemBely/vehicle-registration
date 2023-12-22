using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;
using VehicleRegistration.Utils;

namespace VehicleRegistration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = RolesConstant.ADMIN)]
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
