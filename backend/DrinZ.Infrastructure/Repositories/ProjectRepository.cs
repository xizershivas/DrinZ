using DrinZ.Domain.Entities;
using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DrinZ.Infrastructure.Repositories;

public class ProjectRepository : GenericRepository<Project>, IProjectRepository
{
    public ProjectRepository(AppDbContext context) : base(context) { }

    public async Task<IEnumerable<Project>> GetFeaturedAsync() =>
        await _dbSet.Where(p => p.IsFeatured).OrderByDescending(p => p.CreatedAt).ToListAsync();

    public async Task<IEnumerable<Project>> GetByCategoryAsync(string category) =>
        await _dbSet.Where(p => p.Category == category).OrderByDescending(p => p.CreatedAt).ToListAsync();
}
