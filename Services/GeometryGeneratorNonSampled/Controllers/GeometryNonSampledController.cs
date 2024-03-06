using System.Numerics;
using Microsoft.AspNetCore.Mvc;

namespace GeometryGeneratorNonSampled.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class GeometryNonSampledController(ILogger<string> logger) : ControllerBase
{

    private readonly ILogger<string> _logger = logger;

    [HttpGet(Name = "nums")]
    public IActionResult GetArray()
    {
        // TODO: This currently handles cube geometry only(box).
        // the api should handle generating a random geometry suitable
        // for all geometric primitives as a first step.
        const int lowerThreshold = 1;
        const int upperThreshold = 7;
        var rand = new Random();
        var vector = new Vector3(rand.Next(lowerThreshold, upperThreshold), 
            rand.Next(lowerThreshold, upperThreshold), rand
                .Next(lowerThreshold, upperThreshold));
        return Ok(new int[] {(int)vector.X, (int)vector.Y, (int)vector.Z});
    }
}
