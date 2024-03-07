using System.Numerics;
using GeometryGeneratorNonSampled.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GeometryGeneratorNonSampled.Controllers;

/// <summary>
/// HTTP Endpoint for generating geometric vectors or matrices.
/// </summary>
/// <param name="generator">The generator service.</param>
[ApiController]
[Route("api/[controller]/[action]")]
public class GeometryNonSampledController(IGeometryGeneratorNonSampled generator) : ControllerBase
{
    

    [HttpGet(Name = "nums")]
    public IActionResult GetArray()
    {
        return Ok(generator.Generate());
    }
}
