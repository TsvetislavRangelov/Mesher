using Microsoft.EntityFrameworkCore;
using Models;

namespace GeneratorHistory.Db;

public class ModelContext(DbContextOptions<ModelContext> options) : DbContext(options)
{
    /// <summary>
    /// References DB.
    /// </summary>
    public DbSet<GeometryModel>? Models { get; init; }
}
