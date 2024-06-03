using GeometryGeneratorNonSampled.RabbitMQ;
using GeometryGeneratorNonSampled.Services.Implementation;
using GeometryGeneratorNonSampled.Services.Interfaces;

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

builder.Services.AddSingleton<IGeometryGeneratorNonSampled, GeometryGeneratorNonSampledService>();
builder.Services.AddSingleton<ISender, SenderService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseCors(allowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
