using VehicleRegistration.Data.Dto;

namespace VehicleRegistration.Interfaces
{
    public interface IAuthService
    {

        Task<AuthServiceResponseDto> SeedRolesAsync();

        Task<AuthServiceResponseDto> RegisterAsync(CustomerDto customerDto);

        Task<AuthServiceResponseDto> LoginAsync(LoginDto loginDto);

        Task<AuthServiceResponseDto> MakeAdminAsync(UpdatePermissionDto updatePermissionDto);
    }
}
