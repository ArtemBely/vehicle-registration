using AutoMapper;
using VehicleRegistration.Data.Dto;
using VehicleRegistration.Models;

namespace VehicleRegistration.Mappers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Vehicle, VehicleDto>();
            CreateMap<Factory, FactoryDto>();
        }
    }
}
