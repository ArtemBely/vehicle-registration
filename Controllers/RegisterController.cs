using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;

namespace VehicleRegistration.Controllers
{

    [Route("/api/v1/auth")]
    [ApiController]
    public class RegisterController : ControllerBase
    {

        private IAuthService _authService;

        public RegisterController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Register([FromBody] CustomerDto customerDto)
        {
            var registerResult = await _authService.RegisterAsync(customerDto);

            if (registerResult.IsSucceed)
                return Ok(registerResult);

            return BadRequest(registerResult);
        }

        [HttpPost]
        [Route("set_roles")]
        public async Task<IActionResult> SeedRoles()
        {
            var seerRoles = await _authService.SeedRolesAsync();

            return Ok(seerRoles);
        }

        [HttpPost]
        [Route("make_admin")]
        public async Task<IActionResult> MakeAdmin([FromBody] UpdatePermissionDto updatePermissionDto)
        {
            var operationResult = await _authService.MakeAdminAsync(updatePermissionDto);

            if (operationResult.IsSucceed)
                return Ok(operationResult);

            return BadRequest(operationResult);
        }

        // Route -> Login
        [HttpPost]
        [Route("logon")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var loginResult = await _authService.LoginAsync(loginDto);

            if (loginResult.IsSucceed)
                return Ok(loginResult);

            return Unauthorized(loginResult);
        }
    }
}
