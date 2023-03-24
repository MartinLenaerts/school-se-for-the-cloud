const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient();
const producer = new Producer(client);

const payloads = [
    { topic: 'my-topic', messages: 'Hello Kafka' }
];

producer.on('ready', function() {
    producer.send(payloads, function(err, data) {
        console.log('Data sent:', data);
    });
});

producer.on('error', function(err) {
    console.error('Error:', err);
});
