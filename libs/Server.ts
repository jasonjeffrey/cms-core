/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/express/express.d.ts' />

import http = require('http');
import express = require('express');

class Server {
  public start():void {
    var server: http.Server,
        app = express();

    server = app.listen(8080, function () {
      console.log('Server listening at http://%s:%s', server.address().address, server.address().port);
    });
  }
}

export = Server;