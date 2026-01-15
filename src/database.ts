import mysql from "promise-mysql";
import keys from "./keys";
const pool = mysql.createPool(keys.database);
pool.then((res: any) => res.getConnection()
.then((connection: any) => {
    connection.release();
    console.log('Database connected successfully.');
}));
export default pool;