using GeneratorHistory.Db;
using GeneratorHistory.RabbitMQ;
using GeneratorHistory.Services.Interfaces;
using OpenTelemetry;
using OpenTelemetry.Metrics;
using OpenTelemetry.Trace;
using Grafana.OpenTelemetry;
using Microsoft.EntityFrameworkCore;

const string allowSpecificOrigins = "dev";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowSpecificOrigins,
        policy =>
        {
            policy.AllowAnyOrigin();
            policy.AllowAnyHeader();
        });
});
builder.Services.AddDbContext<ModelContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("ModelDb"));
});

builder.Services.AddSingleton<IReceiver, Receiver>();

var app = builder.Build();
        
using var scope = app.Services.CreateScope();
var modelContext = scope.ServiceProvider.GetRequiredService<ModelContext>();
modelContext.Database.EnsureCreated();


app.UseRouting();
app.UseCors(allowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();
var receiver = new Receiver();
receiver.Receive();
app.Run();
