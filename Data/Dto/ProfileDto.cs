using Microsoft.AspNetCore.Identity;

namespace VehicleRegistration.Data.Dto
{
    public class ProfileDto : IdentityUser
    {
        public string FirstName { get; set; }
        public string Surname { get; set; }
    }

}
