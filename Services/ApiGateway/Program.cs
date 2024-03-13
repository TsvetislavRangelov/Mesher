var builder = WebApplication.CreateBuilder(args);
var allowSpecificOrigins = "dev";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://mesher-client-1:3000");
        });
});
builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
var app = builder.Build();
app.UseCors(allowSpecificOrigins);
app.MapReverseProxy();
app.Run();