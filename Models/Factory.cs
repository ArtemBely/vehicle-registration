using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VehicleRegistration.Models
{
    [Table("factory")]
    public class Factory
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required]
        [MaxLength(30)]
        public string title { get; set; }

        [Required]
        [MaxLength(30)]
        public string factory_location { get; set; }

        [Required]
        public int director_id { get; set; }
    }
}
