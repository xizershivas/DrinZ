using DrinZ.Application.DTOs;
using DrinZ.Application.Interfaces;
using DrinZ.Domain.Entities;
using DrinZ.Domain.Interfaces;

namespace DrinZ.Application.Services;

/// <summary>
/// Portfolio service — depends only on IUnitOfWork (single DI entry point).
/// All repository access goes through UoW, giving us one SaveChanges per operation.
/// </summary>
public class PortfolioService : IPortfolioService
{
    private readonly IUnitOfWork _uow;

    public PortfolioService(IUnitOfWork uow) => _uow = uow;

    public async Task<IEnumerable<ProjectDto>> GetAllProjectsAsync()
    {
        var projects = await _uow.Projects.GetAllAsync();
        return projects.Select(MapToDto);
    }

    public async Task<IEnumerable<ProjectDto>> GetFeaturedProjectsAsync()
    {
        var projects = await _uow.Projects.GetFeaturedAsync();
        return projects.Select(MapToDto);
    }

    public async Task<IEnumerable<SkillDto>> GetAllSkillsAsync()
    {
        var skills = await _uow.Skills.GetAllAsync();
        return skills.OrderBy(s => s.Category).ThenBy(s => s.SortOrder)
                     .Select(MapSkillToDto);
    }

    public async Task<IEnumerable<SkillDto>> GetSkillsByCategoryAsync(string category)
    {
        var skills = await _uow.Skills.GetByCategoryAsync(category);
        return skills.OrderBy(s => s.SortOrder).Select(MapSkillToDto);
    }

    public async Task<bool> SendContactMessageAsync(ContactMessageDto dto)
    {
        var message = new ContactMessage
        {
            Name    = dto.Name,
            Email   = dto.Email,
            Subject = dto.Subject,
            Message = dto.Message,
            SentAt  = DateTime.UtcNow
        };
        await _uow.ContactMessages.AddAsync(message);
        await _uow.SaveChangesAsync();
        return true;
    }

    // ── Mapping helpers ─────────────────────────────────────────────────────────
    private static ProjectDto MapToDto(Project p) =>
        new(p.Id, p.Title, p.Description, p.TechStack, p.LiveUrl, p.GithubUrl, p.Category, p.IsFeatured);

    private static SkillDto MapSkillToDto(Skill s) =>
        new(s.Id, s.Name, s.Proficiency, s.Category, s.SortOrder);
}
