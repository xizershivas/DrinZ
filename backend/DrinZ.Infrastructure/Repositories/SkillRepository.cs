using DrinZ.Domain.Entities;
using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DrinZ.Infrastructure.Repositories;

public class SkillRepository : GenericRepository<SkillModel>, ISkillRepository
{
    public SkillRepository(AppDb db) : base(db) { }

    public async Task<IEnumerable<SkillModel>> GetByCategoryAsync(string category) =>
        await _dbSet.Where(s => s.Category == category).OrderBy(s => s.SortOrder).ToListAsync();
}
