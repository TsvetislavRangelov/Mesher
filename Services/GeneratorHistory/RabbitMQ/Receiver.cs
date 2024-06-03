using System.Text;
using GeneratorHistory.Services.Interfaces;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace GeneratorHistory.RabbitMQ;

/// <summary>
/// RabbitMQ receiver.
/// </summary>
public class Receiver : IReceiver
{
    /// <summary>
    /// C`tor.
    /// </summary>
    public Receiver()
    {
        var factory = new ConnectionFactory { HostName = "rabbitmq" };
        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        channel.QueueDeclare(queue: "hello",
            durable: true,
            exclusive: false,
            autoDelete: false,
            arguments: null);

        Console.WriteLine(" [*] Waiting for messages.");

        var consumer = new EventingBasicConsumer(channel);
        consumer.Received += (model, ea) =>
        {
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            Console.WriteLine($" [x] Received {message}");
        };
        channel.BasicConsume(queue: "hello",
            autoAck: true,
            consumer: consumer);
    }
    
}