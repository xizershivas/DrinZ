using DrinZ.Application.Interfaces;
using DrinZ.Application.Services;
using DrinZ.Domain.Interfaces;
using DrinZ.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DrinZ.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        // Register DbContext
        services.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

        // IUnitOfWork — single entry point for all repositories.
        // Controllers/services only need to inject IUnitOfWork.
        services.AddScoped<IUnitOfWork, UnitOfWork>();

        // Application service layer
        services.AddScoped<IPortfolioService, PortfolioService>();

        return services;
    }
}
