using Microsoft.AspNetCore.Mvc;
using VehicleRegistration.Models;

namespace VehicleRegistration.Interfaces
{
    public interface IPostService
    {
        PostModel Create(PostModel model);

        PostModel Update(PostModel model);

        PostModel Get(int id);

        List<PostModel> Get();

        void Delete(int id);
    }
}
