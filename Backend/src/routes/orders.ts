import db from '../db';
import { ExpressRequest, ExpressResponse } from '../types/expressTypes';
import { processValue } from './helpers';

export function getOrders(request: ExpressRequest, response: ExpressResponse): void {
    db.query(`SELECT * FROM restaurant_order`)
        .then((res) => {
            response.status(201).send(res.rows);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT ORDER query failed').end();
        });
}

export function deleteOrder(request: ExpressRequest, response: ExpressResponse): void {
    const oid = request.query.oid;
    if (!oid) {
        response.status(400).send('Request missing order id');
        return;
    }
    db.query(`DELETE FROM restaurant_order WHERE oid=$1`, [oid])
        .then((res) => {
            response.status(201).send('Order deleted');
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: DELETE ORDER query failed').end();
        });
}

export function updateOrder(request: ExpressRequest, response: ExpressResponse): void {
    const oid = request.query.oid;
    if (!oid) {
        response.status(400).send('Request missing order id');
        return;
    }
    const attributes = request.body;
    const query = `UPDATE restaurant_order SET ${updateQueryHelper(attributes)} WHERE oid = $1`;
    db.query(query, [oid])
        .then((res) => {
            response.status(201).send('Order updated');
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: UPDATE ORDER query failed').end();
        });
}

function updateQueryHelper(attributes) {
    let query = ``;
    for (const property in attributes) {
        const value = attributes[property];
        query += `${property}=${typeof value == 'string' ? "'" + value + "'" : value},`;
    }
    return query.slice(0, -1);
}

export function projectOrders(request: ExpressRequest, response: ExpressResponse): void {
    let columns = request.body.columns;
    let query = `SELECT `;
    columns.forEach((column) => {
        query += `${column},`;
    });

    query = `${query.slice(0, -1)} FROM restaurant_order`;
    db.query(query)
        .then((res) => {
            response.status(201).send(res.rows);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: ORDER PROJECTION query failed').end();
        });
}

export function getOrderCount(request: ExpressRequest, response: ExpressResponse): void {
    db.query(`SELECT COUNT(*) FROM restaurant_order`)
        .then((res) => {
            response.status(201).send(res.rows);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: ORDER COUNT query failed').end();
        });
}

export function addOrder(request: ExpressRequest, response: ExpressResponse): void {
    let query = `INSERT INTO restaurant_order (`;
    const values = request.body;
    for (const property in values) {
        query += `${property},`;
    }
    query = `${query.slice(0, -1)}) VALUES (`;
    for (const property in values) {
        const value = values[property];
        query += `${typeof value == 'string' ? "'" + value + "'" : value},`;
    }
    query = `${query.slice(0, -1)});`;
    db.query(query)
        .then((res) => {
            response.status(201).send('Order added');
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: INSERT ORDER query failed').end();
        });
}

export interface SelectCondition {
    name: string;
    value: string | number;
    comparator: comparator;
}
type comparator = '=' | '!=' | '>' | '>=' | '<' | '<=' | 'LIKE' | 'IN';

export function selectOrder(request: ExpressRequest, response: ExpressResponse): void {
    // Only support AND connectives for now
    const conditions: SelectCondition[] = request.body;

    let query = 'SELECT * FROM restaurant_order WHERE ';
    for (const { name, value, comparator } of conditions) {
        query += `${name} ${comparator} ${processValue(value)} AND `;
    }
    query = query.slice(0, query.lastIndexOf('AND'));
    console.log(query);

    db.query(query)
        .then((res) => {
            response.status(200).send(res.rows);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: selectOrder query failed').end();
        });
}

export function divideOrderByChef(request: ExpressRequest, response: ExpressResponse): void {
    // const denominator = request.body;
    // Finds an order that contains order items cooked by all chefs

    let query = `
    SELECT * FROM restaurant_order o WHERE NOT EXISTS 
    (SELECT * FROM chef c WHERE NOT EXISTS
        (SELECT doi.order_id, doi.chef_id FROM dish_order_item doi
            WHERE doi.order_id = o.oid AND doi.chef_id = c.eid))`;
    db.query(query)
        .then((res) => {
            response.status(200).send(res.rows);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: divideOrderByChef query failed').end();
        });
}
