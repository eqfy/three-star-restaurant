import db from '../db';
import { ExpressResponse } from '../types/expressTypes';

export function testDBConnection(response: ExpressResponse): void {
    db.query('SELECT * FROM restaurant')
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}
