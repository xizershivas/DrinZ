using DrinZ.Domain.Entities;
using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DrinZ.Infrastructure.Repositories;

public class ProjectRepository : GenericRepository<ProjectModel>, IProjectRepository
{
    public ProjectRepository(AppDb db) : base(db) { }

    public async Task<IEnumerable<ProjectModel>> GetFeaturedAsync() =>
        await _dbSet.Where(p => p.IsFeatured).OrderByDescending(p => p.CreatedAt).ToListAsync();

    public async Task<IEnumerable<ProjectModel>> GetByCategoryAsync(string category) =>
        await _dbSet.Where(p => p.Category == category).OrderByDescending(p => p.CreatedAt).ToListAsync();
}
