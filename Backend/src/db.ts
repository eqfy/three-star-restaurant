import { Pool } from "pg";

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = {
  query:(text, callback) => {
    pool.connect((err, client, release) => {
      if (err) {
        return console.error("Error acquiring client", err.stack);
      }
      client.query(text, (err, result) => {
        release();
        if (err) {
          return console.error("Error executing query", err.stack);
        }
        callback(err, result);
      });
    });
  }
  };


export default db;