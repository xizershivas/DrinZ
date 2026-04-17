using DrinZ.Domain.Entities;

namespace DrinZ.Domain.Interfaces;

public interface IProjectRepository : IRepository<Project>
{
    Task<IEnumerable<Project>> GetFeaturedAsync();
    Task<IEnumerable<Project>> GetByCategoryAsync(string category);
}
