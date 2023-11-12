using VehicleRegistration.Data;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;

namespace VehicleRegistration.Services
{
    public class RoleService : IRoleService
    {

        private AppDataContext _appDataContext;

        public RoleService(AppDataContext appDataContext)
        {
            _appDataContext = appDataContext;
        }

        public List<Role> Get()
        {
            return _appDataContext.Role.ToList();
        }
    }
}
