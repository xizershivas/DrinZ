using DrinZ.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DrinZ.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SkillsController : ControllerBase
{
    private readonly IPortfolioService _service;

    public SkillsController(IPortfolioService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll() =>
        Ok(await _service.GetAllSkillsAsync());

    [HttpGet("category/{category}")]
    public async Task<IActionResult> GetByCategory(string category) =>
        Ok(await _service.GetSkillsByCategoryAsync(category));
}
