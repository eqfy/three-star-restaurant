import db from '../db';
import { ExpressResponse } from '../types/expressTypes';

export function getDishInfo(response: ExpressResponse): void {
    db.query('SELECT * FROM dish_info')
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}

export function getDishInfoOrderCount(response: ExpressResponse): void {
    db.query(
        'SELECT dish_info_name, SUM(amount) AS count FROM dish_order_item GROUP BY dish_info_name'
    )
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}
