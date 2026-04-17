namespace DrinZ.Domain.Interfaces;

/// <summary>
/// Unit of Work — aggregates all repositories under one transaction boundary.
/// Inject IUnitOfWork wherever you need cross-repo operations with a single SaveChanges.
/// </summary>
public interface IUnitOfWork : IAsyncDisposable
{
    IProjectRepository Projects { get; }
    ISkillRepository Skills { get; }
    IContactMessageRepository ContactMessages { get; }

    Task<int> SaveChangesAsync(CancellationToken ct = default);
}
