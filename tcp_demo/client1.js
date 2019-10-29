const net = require('net');

const client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
  console.log('Connected');
  client.write('Hello, server! Love, China.');
});

client.on('data', function(data) {
  console.log('Received: ' + data);
  client.destroy();
});

client.on('close', function() {
  console.log('connection closed');
});
