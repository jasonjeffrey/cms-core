import Database = require('./libs/Database');
import Server = require('./libs/Server');

interface CoreConfiguration {
    DatabaseModule: string;
    DatabaseConnectionSting: string;
}

class Core {
    public static Server = Server;
    private databaseInstance: Database.IDatabase;
    private coreConfiguration: CoreConfiguration;
    
    constructor(config: CoreConfiguration) {
        this.coreConfiguration = config;
        this.databaseInstance = new Database.Connection(config.DatabaseModule, config.DatabaseConnectionSting).getInstance();
    }
    
    public start(): void {
        var server = new Server();
        
        server.start();
    }
}

export = Core;

