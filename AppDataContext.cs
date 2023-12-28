using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration
{
    public class AppDataContext : IdentityDbContext<ProfileDto>
    {
        public DbSet<Role> Role { get; set; }

        public DbSet<Vehicle> Vehicles { get; set; }

        public DbSet<Factory> Factories { get; set; }

        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {
            Database.Migrate();
        }

    }

}
