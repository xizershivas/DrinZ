namespace DrinZ.Domain.Entities;

public class SkillModel
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Proficiency { get; set; } // 0-100
    public string Category { get; set; } = string.Empty;
    public int SortOrder { get; set; }
}
