import db from '../db';
import { ExpressRequest, ExpressResponse } from '../types/expressTypes';
import { getSchemaFromAttrHelper, getValuesFromAttrHelper, updateQueryHelper } from './helpers';

const dishOrderItemSchema = [
    'dish_id',
    'order_id',
    'description',
    'amount',
    'status',
    'dish_info_name',
    'chef_id',
];

export function getDishOrderItems(request: ExpressRequest, response: ExpressResponse): void {
    const orderId = request.params.orderId;
    const query = `SELECT * FROM dish_order_item ${
        orderId ? `WHERE order_id = ${orderId} ` : ''
    } ORDER BY dish_id`;
    db.query(query)
        .then((res) => response.status(200).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: getDishOrderItems failed').end();
        });
}

export function addDishOrderItem(request: ExpressRequest, response: ExpressResponse): void {
    console.log(request.body);
    const attributes = request.body;
    const dishId = request.params.dishId;
    const query = `
    INSERT INTO dish_order_item (${getSchemaFromAttrHelper(
        attributes,
        dishOrderItemSchema
    )}) VALUES (${getValuesFromAttrHelper(attributes)})
    `;

    db.query(query)
        .then((res) => {
            console.log(res);
            response.status(200).send(`dish_order_item - ${dishId} added`);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: addDishOrderItem failed').end();
        });
}

export function updateDishOrderItem(request: ExpressRequest, response: ExpressResponse): void {
    const attributes = request.body;
    const dishId = request.params.dishId;
    const query = `
    UPDATE dish_order_item 
    SET ${updateQueryHelper(attributes)}
    WHERE dish_id = $1
    `;
    db.query(query, [dishId])
        .then((res) => {
            response.status(200).send(`dish_order_item - ${dishId} updated`);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: updateDishOrderItem failed').end();
        });
}

export function deleteDishOrderItem(request: ExpressRequest, response: ExpressResponse): void {
    const dishId = request.params.dishId;
    if (!dishId) {
        response.status(400).send('Request missing dish_id for dish_order_item table');
        return;
    }
    db.query('DELETE FROM dish_order_item WHERE dish_id = $1', [dishId])
        .then((res) => response.status(200).send(`dish_order_item - ${dishId} deleted`))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: deleteDishOrderItem failed').end();
        });
}

export function getTotalDishOrderItemCount(response: ExpressResponse): void {
    db.query('SELECT COUNT(*) FROM dish_order_item')
        .then((res) => response.status(200).send(res.rows))
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
