export interface IDatabase {
	connect();
}

export class DBConnection {
	public static openConnection():void {
		console.log('test');
	}
}
