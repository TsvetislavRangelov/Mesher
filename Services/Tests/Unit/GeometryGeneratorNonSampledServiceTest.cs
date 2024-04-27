using GeometryGeneratorNonSampled.Services.Implementation;
using GeometryGeneratorNonSampled.Services.Interfaces;

namespace Unit;

public class GeometryGeneratorNonSampledServiceTest
{
    private GeometryGeneratorNonSampledService? _mockGeneratorNonSampled;
    /// <summary>
    /// Setup method executed before every test case run.
    /// </summary>
    [SetUp]
    public void Setup()
    {
        _mockGeneratorNonSampled = new GeometryGeneratorNonSampledService();
    }

    /// <summary>
    /// Tests <see cref="IGeometryGeneratorNonSampled.GenerateVertices"/>.
    /// </summary>
    [Test]
    [TestCase(null)]
    [TestCase(25000)]
    [TestCase(50000)]
    [TestCase(0)]
    public void TestGenerateVertices(int? vertexCount)
    {
        var vertexArray = _mockGeneratorNonSampled!.GenerateVertices(vertexCount);
        Assert.That(vertexArray, Is.Not.Empty);
        Assert.That(vertexArray, Has.Length.AtLeast(3));
    }
}