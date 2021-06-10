import { Pool, QueryArrayConfig } from 'pg';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const db = {
    async query(text: string | QueryArrayConfig<any[]>, params?: any[]) {
        const start = Date.now();
        const res = await pool.query(text, params);
        const duration = Date.now() - start;
        console.log('executed query', { text, duration, rows: res.rowCount });
        return res;
    },
    async getClient() {
        const client = await pool.connect();
        const query = client.query;
        const release = client.release;
        // set a timeout of 5 seconds, after which we will log this client's last query
        const timeout = setTimeout(() => {
            console.error('A client has been checked out for more than 5 seconds!');
            console.error(
                // @ts-ignore
                `The last executed query on this client was: ${client.lastQuery}`
            );
        }, 5000);
        // monkey patch the query method to keep track of the last query executed
        client.query = (...args) => {
            // @ts-ignore
            client.lastQuery = args;
            return query.apply(client, args);
        };
        client.release = () => {
            // clear our timeout
            clearTimeout(timeout);
            // set the methods back to their old un-monkey-patched version
            client.query = query;
            client.release = release;
            return release.apply(client);
        };
        return client;
    },
};

export default db;
