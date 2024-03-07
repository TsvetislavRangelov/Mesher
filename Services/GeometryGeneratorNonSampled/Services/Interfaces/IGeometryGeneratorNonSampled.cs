namespace GeometryGeneratorNonSampled.Services.Interfaces;

/// <summary>
/// Interface defining APIs for geometry generation (vector or matrix based).
/// </summary>
public interface IGeometryGeneratorNonSampled
{
    public int[] Generate();
}