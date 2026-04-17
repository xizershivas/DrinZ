using DrinZ.Domain.Entities;

namespace DrinZ.Domain.Interfaces;

public interface ISkillRepository : IRepository<Skill>
{
    Task<IEnumerable<Skill>> GetByCategoryAsync(string category);
}
