using System.ComponentModel.DataAnnotations;

namespace VehicleRegistration.Data.Dto
{
    public class CustomerDto
    {
        [Required(ErrorMessage = "FirstName is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "LastName is required")]
        public string Surname { get; set; }

        [Required(ErrorMessage = "Phone is required")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "DateOfBirth is required")]
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

    }
}
