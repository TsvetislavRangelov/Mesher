using System.Numerics;
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
    /// <returns>A <see cref="Vector3Model"/> representing a point in 3D space (vertex).</returns>
    public float[] GenerateVertices(int? vertexCount);
}