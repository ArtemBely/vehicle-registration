using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VehicleRegistration.Data.Dto
{
    public class FactoryDto
    {

        public int id { get; set; }

        public string title { get; set; }

        public string factory_location { get; set; }

        public string director_id { get; set; }
    }
}

