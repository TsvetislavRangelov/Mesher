using System.Text;
using GeneratorHistory.Domain;
using GeneratorHistory.Services.Interfaces;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace GeneratorHistory.Services.RabbitMQ;

/// <summary>
/// RabbitMQ receiver.
/// </summary>
public class Receiver : IReceiver
{
    private IModel? _channel;
    private void Configure()
    {
        var factory = new ConnectionFactory { HostName = "rabbitmq" };
        var connection = factory.CreateConnection();
        _channel = connection.CreateModel();

        _channel?.QueueDeclare(queue: "hello",
            durable: true,
            exclusive: false,
            autoDelete: false,
            arguments: null);
    }

    public void Receive()
    {
        Console.WriteLine(" [*] Waiting for messages.");

        var consumer = new EventingBasicConsumer(_channel);
        consumer.Received += (model, ea) =>
        {
            
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            var deserialized = JsonConvert.DeserializeObject<GeometryModel>(message);
            Console.WriteLine($" [x] Received {deserialized?.Id}");
        };
        _channel.BasicConsume(queue: "hello",
            autoAck: true,
            consumer: consumer);
    }
    /// <summary>
    /// C`tor.
    /// </summary>
    public Receiver()
    { 
        Configure();
    }
}