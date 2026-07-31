## VS Code Dev Tunnel Refresh Loop

Problem:
- Page refreshed every 1–2 seconds.
- WebSocket handshake failed.

Cause:
- Vite HMR tried to connect to :3000 over the tunnel.

Solution:
server: {
  host: true,
  hmr: {
    protocol: "wss",
    clientPort: 443,
  },
}