import db from '../db';
import { Request, Response } from '../types/expressTypes';

export function getEmployee(request: Request, response: Response): void {
    const employeeTypes = request.query.employee_types || [];

    db.query('SELECT * FROM chef')
        .then((res) => {
            console.log(res);
            response.status(201).send(res.rows);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}
