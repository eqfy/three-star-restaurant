import db from '../db';

export function getDishInfo(response: any): void {
    db.query('SELECT * FROM dish_info')
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}
