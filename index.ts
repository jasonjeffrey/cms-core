import Database = require('./libs/Database');
import Server = require('./libs/Server');

class Core {
    public static Database = Database;
    public static Server = Server;

    public start(): void {
        var server = new Server();

        server.start();
    }
}

export = Core;

