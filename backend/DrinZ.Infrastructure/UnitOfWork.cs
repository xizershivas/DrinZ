using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;
using DrinZ.Infrastructure.Repositories;

namespace DrinZ.Infrastructure;

/// <summary>
/// Concrete Unit of Work. Shares a single DbContext across all repositories
/// so all operations within a request participate in one transaction.
/// </summary>
public sealed class UnitOfWork : IUnitOfWork
{
    private readonly AppDbContext _context;

    // Lazy-init so repos are only created when accessed
    private IProjectRepository? _projects;
    private ISkillRepository? _skills;
    private IContactMessageRepository? _contactMessages;

    public UnitOfWork(AppDbContext context) => _context = context;

    public IProjectRepository Projects =>
        _projects ??= new ProjectRepository(_context);

    public ISkillRepository Skills =>
        _skills ??= new SkillRepository(_context);

    public IContactMessageRepository ContactMessages =>
        _contactMessages ??= new ContactMessageRepository(_context);

    public Task<int> SaveChangesAsync(CancellationToken ct = default) =>
        _context.SaveChangesAsync(ct);

    public async ValueTask DisposeAsync() =>
        await _context.DisposeAsync();
}
