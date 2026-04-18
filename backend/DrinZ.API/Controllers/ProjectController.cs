using DrinZ.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DrinZ.API.Controllers;

[ApiController]
[Route("api/projects")]
public class ProjectController : ControllerBase
{
    private readonly IPortfolioService _service;

    public ProjectController(IPortfolioService service) => _service = service;

    [HttpGet]
    public async Task<IActionResult> GetAll() =>
        Ok(await _service.GetAllProjectsAsync());

    [HttpGet("featured")]
    public async Task<IActionResult> GetFeatured() =>
        Ok(await _service.GetFeaturedProjectsAsync());
}
