import db from '../db';
import { ExpressResponse } from '../types/expressTypes';

export function getMenus(response: ExpressResponse): void {
    db.query('SELECT * FROM menu')
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}

export function getDishInfoInMenu(menu: string, response: ExpressResponse): void {
    db.query(
        `SELECT di.* FROM menu_dish_info mdi , dish_info di WHERE mdi.dish_info_name=di.name AND mdi.menu_name=$1`,
        [menu]
    )
        .then((res) => response.status(201).send(res.rows))
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}
