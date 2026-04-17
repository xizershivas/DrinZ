using DrinZ.Domain.Entities;

namespace DrinZ.Domain.Interfaces;

public interface ISkillRepository : IRepository<SkillModel>
{
    Task<IEnumerable<SkillModel>> GetByCategoryAsync(string category);
}
