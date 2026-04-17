namespace DrinZ.Application.DTOs;

public record ProjectDto(
    int Id,
    string Title,
    string Description,
    string TechStack,
    string? LiveUrl,
    string? GithubUrl,
    string Category,
    bool IsFeatured
);

public record CreateProjectDto(
    string Title,
    string Description,
    string TechStack,
    string? LiveUrl,
    string? GithubUrl,
    string Category,
    bool IsFeatured
);
