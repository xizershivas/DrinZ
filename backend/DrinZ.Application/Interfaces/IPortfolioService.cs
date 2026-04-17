using DrinZ.Application.DTOs;

namespace DrinZ.Application.Interfaces;

public interface IPortfolioService
{
    Task<IEnumerable<ProjectDto>> GetAllProjectsAsync();
    Task<IEnumerable<ProjectDto>> GetFeaturedProjectsAsync();
    Task<IEnumerable<SkillDto>> GetAllSkillsAsync();
    Task<IEnumerable<SkillDto>> GetSkillsByCategoryAsync(string category);
    Task<bool> SendContactMessageAsync(ContactMessageDto dto);
}
