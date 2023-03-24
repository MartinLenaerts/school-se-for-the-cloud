const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient();
const consumer = new Consumer(
    client,
    [{ topic: 'my-topic', partition: 0 }],
    { autoCommit: true }
);

consumer.on('message', function(message) {
    console.log('Received message:', message);
});

consumer.on('error', function(err) {
    console.error('Error:', err);
});
