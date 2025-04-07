const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log("New client connected. Total:", clients.size);

  ws.on('message', (message) => {
    let data;
    try {
      data = JSON.parse(message);
    } catch (e) {
      console.warn("Invalid JSON:", e);
      return;
    }

    // If it's a 'ready' message, respond with sync info
    if (data.type === "ready") {
      for (const client of clients) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            type: "sync",
            hash: data.hash,
            currentTime: data.currentTime,
            paused: data.paused
          }));
          break;
        }
      }
      return;
    }

    // Broadcast to others
    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    }
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log("Client disconnected. Total:", clients.size);
  });
});

console.log("✅ WebSocket server running on ws://localhost:3000");
