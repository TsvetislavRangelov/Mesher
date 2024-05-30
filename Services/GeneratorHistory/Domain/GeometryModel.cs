namespace GeneratorHistory.Domain;

/// <summary>
/// Domain model representing a generated geometry model.
/// </summary>
public class GeometryModel(string id, float[] vertexData)
{
    public string ModelId { get; set; } = id;
    public float[] VertexData { get; set; } = vertexData;
}
