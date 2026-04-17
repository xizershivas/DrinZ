using DrinZ.Application.DTOs;
using DrinZ.Application.Interfaces;
using DrinZ.Domain.Entities;
using DrinZ.Domain.Interfaces;

namespace DrinZ.Application.Services;

public class PortfolioService : IPortfolioService
{
    private readonly IUnitOfWork _uow;

    public PortfolioService(IUnitOfWork uow) => _uow = uow;

    public async Task<IEnumerable<ProjectDto>> GetAllProjectsAsync()
    {
        var projects = await _uow.Projects.GetAllAsync();
        return projects.Select(MapProjectToDto);
    }

    public async Task<IEnumerable<ProjectDto>> GetFeaturedProjectsAsync()
    {
        var projects = await _uow.Projects.GetFeaturedAsync();
        return projects.Select(MapProjectToDto);
    }

    public async Task<IEnumerable<SkillDto>> GetAllSkillsAsync()
    {
        var skills = await _uow.Skills.GetAllAsync();
        return skills.OrderBy(s => s.Category).ThenBy(s => s.SortOrder).Select(MapSkillToDto);
    }

    public async Task<IEnumerable<SkillDto>> GetSkillsByCategoryAsync(string category)
    {
        var skills = await _uow.Skills.GetByCategoryAsync(category);
        return skills.OrderBy(s => s.SortOrder).Select(MapSkillToDto);
    }

    public async Task<bool> SendContactMessageAsync(ContactMessageDto dto)
    {
        await _uow.ContactMessages.AddAsync(new ContactMessageModel
        {
            Name    = dto.Name,
            Email   = dto.Email,
            Subject = dto.Subject,
            Message = dto.Message,
            SentAt  = DateTime.UtcNow
        });
        await _uow.SaveChangesAsync();
        return true;
    }

    private static ProjectDto MapProjectToDto(ProjectModel p) =>
        new(p.Id, p.Title, p.Description, p.TechStack, p.LiveUrl, p.GithubUrl, p.Category, p.IsFeatured);

    private static SkillDto MapSkillToDto(SkillModel s) =>
        new(s.Id, s.Name, s.Proficiency, s.Category, s.SortOrder);
}
