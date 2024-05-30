using GeneratorHistory.Domain;
using Microsoft.EntityFrameworkCore;

namespace GeneratorHistory.Db;

public class ModelContext(DbContextOptions<ModelContext> options) : DbContext(options)
{
    /// <summary>
    /// References DB.
    /// </summary>
    public DbSet<GeometryModel>? Models { get; init; }
}
