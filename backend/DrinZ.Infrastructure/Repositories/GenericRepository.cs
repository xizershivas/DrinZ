using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DrinZ.Infrastructure.Repositories;

public class GenericRepository<T> : IRepository<T> where T : class
{
    protected readonly AppDb _db;
    protected readonly DbSet<T> _dbSet;

    public GenericRepository(AppDb db)
    {
        _db = db;
        _dbSet = db.Set<T>();
    }

    public async Task<IEnumerable<T>> GetAllAsync() =>
        await _dbSet.ToListAsync();

    public async Task<T?> GetByIdAsync(int id) =>
        await _dbSet.FindAsync(id);

    public async Task<T> AddAsync(T entity)
    {
        await _dbSet.AddAsync(entity);
        return entity;
    }

    public Task UpdateAsync(T entity)
    {
        _dbSet.Update(entity);
        return Task.CompletedTask;
    }

    public async Task DeleteAsync(int id)
    {
        var entity = await GetByIdAsync(id);
        if (entity is not null)
            _dbSet.Remove(entity);
    }
}
