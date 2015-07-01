import Server = require('./Server');

export function startWebServer() {
  var server = new Server();

  server.start();
}