var builder = WebApplication.CreateBuilder(args);
var allowSpecificOrigins = "dev";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://client:3000", "http://localhost:3000");
        });
});
builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
var app = builder.Build();


foreach (var c in builder.Configuration.AsEnumerable())
{
    Console.WriteLine(c.Key + " = " + c.Value);
}

app.UseCors(allowSpecificOrigins);
app.MapReverseProxy();
app.Run();