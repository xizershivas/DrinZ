using DrinZ.Domain.Entities;
using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;

namespace DrinZ.Infrastructure.Repositories;

public class ContactMessageRepository : GenericRepository<ContactMessageModel>, IContactMessageRepository
{
    public ContactMessageRepository(AppDb db) : base(db) { }
}
