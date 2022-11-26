import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  port: 3306,
  user: "luisvasquez",
  password: "30889567",
  database: "tasksdb",
});

// consultas de sql
