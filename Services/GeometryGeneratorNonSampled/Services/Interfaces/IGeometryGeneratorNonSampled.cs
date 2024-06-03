using GeometryGeneratorNonSampled.Domain;

namespace GeometryGeneratorNonSampled.Services.Interfaces;

/// <summary>
/// Interface defining APIs for geometry generation (vector or matrix based).
/// </summary>
public interface IGeometryGeneratorNonSampled
{
    /// <summary>
    /// Procedurally generates vertices.
    /// </summary>
    /// <returns>A <see cref="GeometryModel"/> containing vertex data.</returns>
    public GeometryModel GenerateVertices(int? vertexCount, string? generatedFor);
}