using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;
using DrinZ.Infrastructure.Repositories;

namespace DrinZ.Infrastructure;

public sealed class UnitOfWork : IUnitOfWork
{
    private readonly AppDb _db;

    private IProjectRepository? _projects;
    private ISkillRepository? _skills;
    private IContactMessageRepository? _contactMessages;

    public UnitOfWork(AppDb db) => _db = db;

    public IProjectRepository Projects =>
        _projects ??= new ProjectRepository(_db);

    public ISkillRepository Skills =>
        _skills ??= new SkillRepository(_db);

    public IContactMessageRepository ContactMessages =>
        _contactMessages ??= new ContactMessageRepository(_db);

    public Task<int> SaveChangesAsync(CancellationToken ct = default) =>
        _db.SaveChangesAsync(ct);

    public async ValueTask DisposeAsync() =>
        await _db.DisposeAsync();
}
