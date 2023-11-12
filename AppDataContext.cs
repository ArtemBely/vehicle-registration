using Microsoft.EntityFrameworkCore;
using VehicleRegistration.Models;

namespace VehicleRegistration
{
    public class AppDataContext : DbContext
    {

        public DbSet<Role> Role { get; set; }

        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {
            Database.Migrate();
        }
    }
}
