namespace GeneratorHistory.DTO;

/// <summary>
/// DTO for save model.
/// </summary>
/// <param name="vertexData">Vertex data.</param>
/// <param name="modelId">UID of model.</param>
public class SaveModelDTO(float[] vertexData, string modelId)
{
    public float[] VertexData { get; set; } = vertexData;
    public string ModelId { get; set; } = modelId;
}