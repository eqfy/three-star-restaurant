"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
if (process.env.NODE_ENV !== "production")
    require("dotenv").config();
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
const db = {
    query: (text, callback) => {
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
exports.default = db;
//# sourceMappingURL=db.js.map