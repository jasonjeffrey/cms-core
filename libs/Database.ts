export interface IDatabase {
	connect(databaseConnectionString: string);
}

export class Connection {
	private instance: IDatabase;

	constructor(databaseModule: string, databaseConnectionString: string) {
		this.instance = this.loadDatabaseInstance(databaseModule);
		this.instance.connect(databaseConnectionString);
	}
	
	public getInstance(): IDatabase {
		return this.instance;
	}

	private loadDatabaseInstance(databaseModule: string): IDatabase {
		var DatabaseModule = require(databaseModule);
		
			return new DatabaseModule();
	}	
}
