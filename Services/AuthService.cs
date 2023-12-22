using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Utils;

namespace VehicleRegistration.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ProfileDto> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public AuthService(UserManager<ProfileDto> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }


        public async Task<AuthServiceResponseDto> LoginAsync(LoginDto loginDto)
        {
            var user = await _userManager.FindByNameAsync(loginDto.Email);

            if (user is null)
                return new AuthServiceResponseDto()
                {
                    IsSucceed = false,
                    Message = "Invalid Credentials"
                };

            var isPasswordCorrect = await _userManager.CheckPasswordAsync(user, loginDto.Password);

            if (!isPasswordCorrect)
                return new AuthServiceResponseDto()
                {
                    IsSucceed = false,
                    Message = "Invalid Credentials"
                };

            var userRoles = await _userManager.GetRolesAsync(user);

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.FirstName),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim("JWTID", Guid.NewGuid().ToString()),
                new Claim("FirstName", user.FirstName),
                new Claim("LastName", user.Surname),
            };

            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            var token = GenerateNewJsonWebToken(authClaims);

            return new AuthServiceResponseDto()
            {
                IsSucceed = true,
                Id = user.Id,
                Name = user.FirstName,
                Surname = user.Surname,
                PhoneNumber = user.PhoneNumber,
                Email = user.Email,
                Role = userRoles,
                Message = token
            };
        }

        public async Task<AuthServiceResponseDto> MakeAdminAsync(UpdatePermissionDto updatePermissionDto)
        {
            var user = await _userManager.FindByNameAsync(updatePermissionDto.UserName);

            if (user is null)
                return new AuthServiceResponseDto()
                {
                    IsSucceed = false,
                    Message = "Invalid User name."
                };

            await _userManager.AddToRoleAsync(user, RolesConstant.ADMIN);

            return new AuthServiceResponseDto()
            {
                IsSucceed = true,
                Message = "User is now an ADMIN"
            };
        }

        public async Task<AuthServiceResponseDto> RegisterAsync(CustomerDto customerDto)
        {
            var isExistsUser = await _userManager.FindByEmailAsync(customerDto.Email);

            if (isExistsUser != null)
                return new AuthServiceResponseDto()
                {
                    IsSucceed = false,
                    Message = "UserName Already Exists"
                };


            ProfileDto newUser = new ProfileDto()
            {
                FirstName = customerDto.Name,
                Surname = customerDto.Surname,
                Email = customerDto.Email,
                PhoneNumber = customerDto.PhoneNumber,
                UserName = customerDto.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
            };

            var createUserResult = await _userManager.CreateAsync(newUser, customerDto.Password);

            if (!createUserResult.Succeeded)
            {
                var errorString = "User Creation Failed Beacause: ";
                foreach (var error in createUserResult.Errors)
                {
                    errorString += " # " + error.Description;
                }
                return new AuthServiceResponseDto()
                {
                    IsSucceed = false,
                    Message = errorString
                };
            }

            // Add a Default USER Role to all users
            await _userManager.AddToRoleAsync(newUser, RolesConstant.USER);


            //set credentials to accept and save in localStorage
            var userRoles = await _userManager.GetRolesAsync(newUser);

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, newUser.FirstName),
                new Claim(ClaimTypes.NameIdentifier, newUser.Id),
                new Claim("JWTID", Guid.NewGuid().ToString()),
                new Claim("FirstName", newUser.FirstName),
                new Claim("LastName", newUser.Surname),
            };

            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            var token = GenerateNewJsonWebToken(authClaims);

            return new AuthServiceResponseDto()
            {
                IsSucceed = true,
                Id = newUser.Id,
                Name = newUser.FirstName,
                Surname = newUser.Surname,
                PhoneNumber = newUser.PhoneNumber,
                Email = newUser.Email,
                Role = userRoles,
                Message = token
            };
        }

        public async Task<AuthServiceResponseDto> SeedRolesAsync()
        {
            bool isGuestRoleExists = await _roleManager.RoleExistsAsync(RolesConstant.GUEST);
            bool isAdminRoleExists = await _roleManager.RoleExistsAsync(RolesConstant.ADMIN);
            bool isUserRoleExists = await _roleManager.RoleExistsAsync(RolesConstant.USER);

            if (isGuestRoleExists && isAdminRoleExists && isUserRoleExists)
                return new AuthServiceResponseDto()
                {
                    IsSucceed = true,
                    Message = "Roles Seeding is Already Done"
                };

            await _roleManager.CreateAsync(new IdentityRole(RolesConstant.USER));
            await _roleManager.CreateAsync(new IdentityRole(RolesConstant.ADMIN));
            await _roleManager.CreateAsync(new IdentityRole(RolesConstant.GUEST));

            return new AuthServiceResponseDto()
            {
                IsSucceed = true,
                Message = "Role Seeding Done Successfully"
            };
        }

        private string GenerateNewJsonWebToken(List<Claim> claims)
        {
            var authSecret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var tokenObject = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(1),
                    claims: claims,
                    signingCredentials: new SigningCredentials(authSecret, SecurityAlgorithms.HmacSha256)
                );

            string token = new JwtSecurityTokenHandler().WriteToken(tokenObject);

            return token;
        }
    }
}
