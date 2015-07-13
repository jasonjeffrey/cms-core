import Server = require('./libs/Server');
import Database = require('./libs/Databse');


class Core {
  public start():void {
    var server:Server = new Server(),
        database:Database = new Database();

    datbase.connect();
    server.start();
  }
}

export = Core;
