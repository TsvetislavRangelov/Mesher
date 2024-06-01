using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GeneratorHistory.Domain;

/// <summary>
/// Domain model representing a generated geometry model.
/// </summary>
[Table("model")]
public class GeometryModel(string id, float[] vertexData, string generatedFor)
{
    [Key]
    [MaxLength(100)]
    public string Id { get; set; } = id;
    public float[] VertexData { get; init; } = vertexData;
    [MaxLength(100)]
    public string? GeneratedFor { get; set; } = generatedFor;
}
