using Microsoft.AspNetCore.Mvc;

namespace GeometryGeneratorNonSampled.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class GeometryTestController(ILogger<string> logger) : ControllerBase
{

    private readonly ILogger<string> _logger = logger;

    [HttpGet(Name = "nums")]
    public int[] GetArray()
    {
        return new[] { 1, 2, 3 };
    }
}
