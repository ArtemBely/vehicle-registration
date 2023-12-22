using System.ComponentModel.DataAnnotations;

namespace VehicleRegistration.Data.Dto
{
    public class AuthServiceResponseDto
    {
        public string Id { get; set; }

        public bool IsSucceed { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public IList<string> Role { get; set; }

        public string Message { get; set; }
    }
}
