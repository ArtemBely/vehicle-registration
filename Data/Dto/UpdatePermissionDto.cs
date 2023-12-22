using System.ComponentModel.DataAnnotations;

namespace VehicleRegistration.Data.Dto
{
    public class UpdatePermissionDto
    {
        [Required(ErrorMessage = "UserName is required")]
        public string UserName { get; set; }
    }
}
