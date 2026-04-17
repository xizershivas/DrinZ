using DrinZ.Domain.Entities;

namespace DrinZ.Domain.Interfaces;

public interface IProjectRepository : IRepository<ProjectModel>
{
    Task<IEnumerable<ProjectModel>> GetFeaturedAsync();
    Task<IEnumerable<ProjectModel>> GetByCategoryAsync(string category);
}
