import db from '../db';

export function getIngredients(response: any): void {
    db.query(`SELECT * FROM ingredient`)
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}

export function getDishInfoIngredients(response: any, dish_info_name: string): void {
    db.query(`SELECT * FROM ingredient WHERE dish_info_name='${dish_info_name}'`)
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}
