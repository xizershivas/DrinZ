using DrinZ.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DrinZ.Infrastructure.Data;

public class AppDb : DbContext
{
    public AppDb(DbContextOptions<AppDb> options) : base(options) { }

    public DbSet<ProjectModel> Projects => Set<ProjectModel>();
    public DbSet<SkillModel> Skills => Set<SkillModel>();
    public DbSet<ContactMessageModel> ContactMessages => Set<ContactMessageModel>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<SkillModel>().HasData(
            new SkillModel { Id = 1,  Name = "C# / ASP.NET Core",    Proficiency = 95, Category = "Backend",  SortOrder = 1 },
            new SkillModel { Id = 2,  Name = "Entity Framework Core", Proficiency = 90, Category = "Backend",  SortOrder = 2 },
            new SkillModel { Id = 3,  Name = "MS SQL Server",         Proficiency = 90, Category = "Database", SortOrder = 1 },
            new SkillModel { Id = 4,  Name = "REST API Design",        Proficiency = 92, Category = "Backend",  SortOrder = 3 },
            new SkillModel { Id = 5,  Name = "React",                 Proficiency = 85, Category = "Frontend", SortOrder = 1 },
            new SkillModel { Id = 6,  Name = "JavaScript / TypeScript",Proficiency = 88, Category = "Frontend", SortOrder = 2 },
            new SkillModel { Id = 7,  Name = "HTML5 / CSS3",           Proficiency = 88, Category = "Frontend", SortOrder = 3 },
            new SkillModel { Id = 8,  Name = "Bootstrap / Tailwind",   Proficiency = 85, Category = "Frontend", SortOrder = 4 },
            new SkillModel { Id = 9,  Name = "Docker",                 Proficiency = 80, Category = "DevOps",   SortOrder = 1 },
            new SkillModel { Id = 10, Name = "Git / Azure DevOps",     Proficiency = 88, Category = "DevOps",   SortOrder = 2 },
            new SkillModel { Id = 11, Name = "MongoDB",                Proficiency = 75, Category = "Database", SortOrder = 2 },
            new SkillModel { Id = 12, Name = "AI API Integration",     Proficiency = 82, Category = "AI",       SortOrder = 1 },
            new SkillModel { Id = 13, Name = "Prompt Engineering",     Proficiency = 85, Category = "AI",       SortOrder = 2 },
            new SkillModel { Id = 14, Name = "Node.js",                Proficiency = 78, Category = "Backend",  SortOrder = 4 }
        );

        modelBuilder.Entity<ProjectModel>().HasData(
            new ProjectModel
            {
                Id = 1, Title = "Transport & Billing System",
                Description = "Enterprise transport management and tax form automation system. Developed and maintained backend and frontend components with optimized performance.",
                TechStack = "C#, ASP.NET Core, Ext JS, MSSQL Server",
                Category = "Enterprise", IsFeatured = true, CreatedAt = new DateTime(2024, 1, 1)
            },
            new ProjectModel
            {
                Id = 2, Title = "Dealer Credit Card System",
                Description = "Dealer credit card processing system enhancing transaction handling, security, and performance for enterprise-level operations.",
                TechStack = "C#, ASP.NET Core, MSSQL Server, jQuery",
                Category = "Enterprise", IsFeatured = true, CreatedAt = new DateTime(2024, 6, 1)
            },
            new ProjectModel
            {
                Id = 3, Title = "Remittance API System",
                Description = "Secure API for international remittance transactions between foreign and local offices with robust data validation and security features.",
                TechStack = "C#, ASP.NET Core API, MSSQL Server, Keycloak SSO",
                Category = "API", IsFeatured = true, CreatedAt = new DateTime(2022, 8, 1)
            },
            new ProjectModel
            {
                Id = 4, Title = "Property Management System",
                Description = "Supported and enhanced Onesite — a large-scale property management platform — with new features and optimized backend services.",
                TechStack = "C#, ASP.NET Core, MSSQL Server, React",
                Category = "Enterprise", IsFeatured = false, CreatedAt = new DateTime(2023, 3, 1)
            },
            new ProjectModel
            {
                Id = 5, Title = "Globe 5G FWA Automation",
                Description = "Automation scripts for Globe 5G Fixed Wireless Access and Broadband App — covering data processing, migration, and reporting pipelines.",
                TechStack = "C#, JavaScript, MSSQL Server, Jenkins",
                Category = "Automation", IsFeatured = false, CreatedAt = new DateTime(2020, 1, 1)
            }
        );
    }
}
