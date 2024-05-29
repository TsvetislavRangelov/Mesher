namespace GeometryGeneratorNonSampled.DTO;

/// <summary>
/// DTO for generated models.
/// </summary>
public class GeometryModelDto(string id, float[] vertexData)
{
    public string Id { get; set; } = id;
    public float[] VertexData { get; set; } = vertexData;
}