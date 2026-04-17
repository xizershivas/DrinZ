using DrinZ.Domain.Entities;
using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DrinZ.Infrastructure.Repositories;

public class SkillRepository : GenericRepository<Skill>, ISkillRepository
{
    public SkillRepository(AppDbContext context) : base(context) { }

    public async Task<IEnumerable<Skill>> GetByCategoryAsync(string category) =>
        await _dbSet.Where(s => s.Category == category).OrderBy(s => s.SortOrder).ToListAsync();
}
