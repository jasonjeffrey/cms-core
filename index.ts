/// <reference path='support/Database.ts' />
/// <reference path='typings/node/node.d.ts' />
/// <reference path='typings/express/express.d.ts' />

import http = require('http');
import express = require('express');

class Server {
  public start():void {
    var database: Database.IDatabase,
        server: http.Server,
        app = express();

    database = Database.create();

    server = app.listen(8080, function () {
      console.log('Server listening at http://%s:%s', server.address().address, server.address().port);
    });
  }

  public getDatabase
}

export = Server;
