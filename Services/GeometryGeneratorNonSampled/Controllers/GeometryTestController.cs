using Microsoft.AspNetCore.Mvc;

namespace GeometryGeneratorNonSampled.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GeometryTestController(ILogger<string> logger) : ControllerBase
{

    private readonly ILogger<string> _logger = logger;

    [HttpGet(Name = "test")]
    public string Get()
    {
        string response = "IT RUNS";
        _logger.LogInformation("Sent response back to client: " + response);
        return response;
    }
}
