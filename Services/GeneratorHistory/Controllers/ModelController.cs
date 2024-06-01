using GeneratorHistory.Db;
using GeneratorHistory.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GeneratorHistory.Controllers;

/// <summary>
/// HTTP Endpoint for generating geometric vectors or matrices.
/// </summary>
[ApiController]
[Route("api/[controller]/[action]")]
public class ModelController(ModelContext context) : ControllerBase
{
    /// <summary>
    /// Endpoint for getting models from history for user.
    /// </summary>
    /// <returns><see cref="IActionResult"/>.</returns>
    [HttpGet]
    public async Task<IActionResult> GetModelHistory([FromQuery] string? username)
    {
        if (username == null)
        {
            return NotFound();
        }
        var models = await context.Models!.Where(m => m.GeneratedFor == username)
            .Take(25).ToListAsync();
        return Ok(models);
    }
    
    /// <summary>
    /// Endpoint for saving models in history for user.
    /// </summary>
    /// <returns><see cref="IActionResult"/>.</returns>
    [HttpPost]
    public async Task<IActionResult> SaveModel([FromBody] GeometryModel model)
    {
        context.Add(model);
        await context.SaveChangesAsync();
        return Created();
    }
}
