using System.ComponentModel.DataAnnotations.Schema;

namespace VehicleRegistration.Models
{
    [Table("role")]
    public class Role
    {
        public int id { get; set; }

        public string role_name { get; set; }

        public string role_description { get; set; }
    }
}
