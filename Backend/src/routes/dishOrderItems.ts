import db from '../db';
import { ExpressResponse } from '../types/expressTypes';

export function getTotalDishOrderItemCount(response: ExpressResponse): void {
    db.query('SELECT COUNT(*) FROM dish_order_item')
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}

export function getOrderDishOrderItemCount(response: ExpressResponse): void {
    db.query('SELECT order_id, COUNT(*) FROM dish_order_item GROUP BY order_id')
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}
