using System.Text;
using GeometryGeneratorNonSampled.Services.Interfaces;
using RabbitMQ.Client;

namespace GeometryGeneratorNonSampled.RabbitMQ;

/// <summary>
/// Rabbit MQ Producer.
/// </summary>
public class SenderService : ISender
{
    private IModel? _channel;

    /// <summary>
    /// Declares the configuration of the sender.
    /// </summary>
    private void Configure()
    {
        var factory = new ConnectionFactory { HostName = "rabbitmq" };
        var connection = factory.CreateConnection(); 
        _channel = connection.CreateModel();

        _channel?.QueueDeclare(queue: "/hello",
            durable: true,
            exclusive: false,
            autoDelete: false,
            arguments: null);
    }

    /// <summary>
    /// Sends a message to the message queue.
    /// </summary>
    public void Send(object? message)
    {
        ArgumentNullException.ThrowIfNull(message);
        var json = Newtonsoft.Json.JsonConvert.SerializeObject(message);
        var body = Encoding.UTF8.GetBytes(json);
        _channel.BasicPublish(exchange: string.Empty,
            routingKey: "/hello",
            basicProperties: null,
            body: body);
    }
    /// <summary>
    /// C`tor.
    /// </summary>
    public SenderService()
    {
        Configure();
    }
}