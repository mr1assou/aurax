import { createPool, Pool } from "mysql2";

// connection to database using singelton design pattern
export class ConnectDatabase {
  public static client: Pool;
  static createConnection(): Pool {
    if (!ConnectDatabase.client) {
      try {
        ConnectDatabase.client = createPool({
          host: 'mysql',
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
          // host: 'localhost',
          // port: 3306,
          // user: 'root',
          // password: '@Marwane2003',
          // database: 'aurax'
        });
        console.log("connected succefully");
      } catch (err) {
        throw err;
      }
    }
    return ConnectDatabase.client;
  }
}



