const net = require('net');

const target = readline.question("Enter the target IP address or hostname: ");
const startPort = parseInt(readline.question("Enter the starting port number: "));
const endPort = parseInt(readline.question("Enter the ending port number: "));

// Loop through each port and check if it's open
for (let port = startPort; port <= endPort; port++) {
  const server = net.createConnection(port, target);

  server.on('connect', () => {
    console.log(`Port ${port} is open`);
    server.end();
  });

  server.on('error', () => {
    server.end();
  });
}
