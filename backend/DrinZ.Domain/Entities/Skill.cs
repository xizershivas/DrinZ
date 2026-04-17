namespace DrinZ.Domain.Entities;

public class Skill
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Proficiency { get; set; } // 0-100
    public string Category { get; set; } = string.Empty; // e.g. Frontend, Backend, Database, DevOps
    public int SortOrder { get; set; }
}
