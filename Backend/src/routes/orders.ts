import db from '../db';
import { ExpressRequest, ExpressResponse } from '../types/expressTypes';

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
    db.query(
        `DELETE FROM restaurant_order WHERE oid=$1`,
        [oid]
    )
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
    if(!oid) response.status(400).send('Request missing order id');
    const attributes = request.body;
    const query = `UPDATE restaurant_order SET ${updateQueryHelper(attributes)} WHERE oid = $1`;
    db.query(
        query,
        [oid]
    )
    .then((res) => {
        response.status(201).send('Order updated');
    })
    .catch((err) => {
        console.error(err);
        response.status(500).send('Error: UPDATE ORDER query failed').end();
    });
}

function updateQueryHelper(attributes){
    let query = ``;
    for (const property in attributes){
        const value = attributes[property];
        query += `${property}=${(typeof value == "string")? "'" + value + "'": value},`;
    }
    return query.slice(0, -1); 
}

export function projectOrders(request: ExpressRequest, response: ExpressResponse): void {
    let columns = request.body.columns;
    let query = `SELECT `;
    columns.forEach(column => {
        query += `${column},`;
    });

    query = `${query.slice(0, -1)} FROM restaurant_order`;
    db.query(
        query,
    )
    .then((res) => {
        response.status(201).send(res.rows);
    })
    .catch((err) => {
        console.error(err);
        response.status(500).send('Error: ORDER PROJECTION query failed').end();
    });
}

export function getOrderCount(request: ExpressRequest, response: ExpressResponse): void {
    db.query(
        `SELECT COUNT(*) FROM restaurant_order`,
    )
    .then((res) => {
        response.status(201).send(res.rows);
    })
    .catch((err) => {
        console.error(err);
        response.status(500).send('Error: ORDER COUNT query failed').end();
    });
}