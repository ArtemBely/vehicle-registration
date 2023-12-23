using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VehicleRegistration.Data.Dto
{
    public class VehicleDto
    {

        public int id { get; set; }

        public string carserie { get; set; }

        public string carbody { get; set; }

        public string motor { get; set; }

        public string transmission { get; set; }

        public string werk { get; set; }

        public string baugruppe { get; set; }

        public int? knr7 { get; set; }

        public long? pin13 { get; set; }

        public int? factory_id { get; set; }
    }
}
