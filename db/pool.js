import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  connectionString: process.env.LOCAL_DB_URI,
});

export default pool;
