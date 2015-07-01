module Database {
  export interface IDatabase {
      connect();
  }

  export function create() {
    return require('nodeCMS-db-' + process.env.DB_TYPE);
  }
}
