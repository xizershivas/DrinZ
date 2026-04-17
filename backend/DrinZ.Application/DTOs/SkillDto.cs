namespace DrinZ.Application.DTOs;

public record SkillDto(
    int Id,
    string Name,
    int Proficiency,
    string Category,
    int SortOrder
);
