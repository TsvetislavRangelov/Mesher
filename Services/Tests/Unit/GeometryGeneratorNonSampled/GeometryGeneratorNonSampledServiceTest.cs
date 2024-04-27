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
        var geometryModel = _mockGeneratorNonSampled!.GenerateVertices(vertexCount);
        Assert.That(geometryModel, Is.Not.Null);
        Assert.That(geometryModel.VertexData, Has.Length.AtLeast(3));
    }
}