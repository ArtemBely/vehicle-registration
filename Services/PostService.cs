using System.Reflection;
using VehicleRegistration.Data;
using VehicleRegistration.Interfaces;
using VehicleRegistration.Models;

namespace VehicleRegistration.Services
{
    public class PostService : IPostService
    {

        private AutoDataContext _autoDataContext;

        public PostService(AutoDataContext autoDataContext) 
        {
            _autoDataContext = autoDataContext;
        }

        public PostModel Create(PostModel model)
        {
            var lastPost = _autoDataContext.Posts.LastOrDefault();
            int newId = lastPost is null ? 1 : lastPost.Id + 1;
            model.Id = newId;
            _autoDataContext.Posts.Add(model);
            return model;
        }

        public void Delete(int id)
        {
            var modelToDelete = _autoDataContext.Posts.FirstOrDefault(x => x.Id == id);
            _autoDataContext.Posts.Remove(modelToDelete);
        }

        public PostModel Get(int id)
        {
            return _autoDataContext.Posts.FirstOrDefault(x => x.Id == id);
        }

        public List<PostModel> Get()
        {
            return _autoDataContext.Posts;
        }

        public PostModel Update(PostModel model)
        {
            var modelToUpdate = _autoDataContext.Posts.FirstOrDefault(x => x.Id == model.Id);
            modelToUpdate.CarName = model.CarName;

            return modelToUpdate;
        }
    }
}
