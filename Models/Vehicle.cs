using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VehicleRegistration.Models
{
    [Table("vehicle")]
    public class Vehicle
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required]
        [MaxLength(30)]
        public string carserie { get; set; }

        [Required]
        [MaxLength(30)]
        public string carbody { get; set; }

        [Required]
        [MaxLength(30)]
        public string motor { get; set; }

        [Required]
        [MaxLength(30)]
        public string transmission { get; set; }

        [Required]
        [MaxLength(30)]
        public string werk { get; set; }

        [Required]
        [MaxLength(30)]
        public string baugruppe { get; set; }

        public int? knr7 { get; set; }

        public long? pin13 { get; set; }

        public int? factory_id { get; set; }
    }
}
