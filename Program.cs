using Microsoft.EntityFrameworkCore;
using VehicleRegistration;
using VehicleRegistration.Data;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDataContext>(o => o.UseNpgsql(builder.Configuration.GetConnectionString("PostgreSqlConnection")));

// Add services to the container.
builder.Services.AddControllersWithViews();

//delete when implement DB
builder.Services.AddTransient<IPostService, PostService>();
builder.Services.AddTransient<IRoleService, RoleService>();
builder.Services.AddSingleton<AutoDataContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}


//app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
