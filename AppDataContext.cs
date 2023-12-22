using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration
{
    //public class AppDataContext : DbContext
    //{

    //    public DbSet<Role> Role { get; set; }

    //    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
    //    {
    //        Database.Migrate();
    //    }
    //}
    public class AppDataContext : IdentityDbContext<ProfileDto>
    {
        public DbSet<Role> Role { get; set; }

        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {
            Database.Migrate();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Конфигурации для модели Role
            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role", t => t.ExcludeFromMigrations());
            });

            // Дополнительные настройки моделей...
        }
    }

}
