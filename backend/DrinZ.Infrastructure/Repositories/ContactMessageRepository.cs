using DrinZ.Domain.Entities;
using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;

namespace DrinZ.Infrastructure.Repositories;

public class ContactMessageRepository : GenericRepository<ContactMessage>, IContactMessageRepository
{
    public ContactMessageRepository(AppDbContext context) : base(context) { }
}
