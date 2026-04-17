using DrinZ.Application.DTOs;
using DrinZ.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DrinZ.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IPortfolioService _service;

    public ContactController(IPortfolioService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Send([FromBody] ContactMessageDto dto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var result = await _service.SendContactMessageAsync(dto);
        return result
            ? Ok(new { message = "Message sent successfully!" })
            : StatusCode(500, new { message = "Failed to send message." });
    }
}
