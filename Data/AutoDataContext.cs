using VehicleRegistration.Models;

namespace VehicleRegistration.Data
{
    public class AutoDataContext
    {
        public List<PostModel> Posts { get; set; }

        public AutoDataContext() {
            Posts = new List<PostModel>();
        }
    }
}
