import db from '../db';
import { Request, Response } from '../types/expressTypes';

export function getEmployee(request: Request, response: Response): void {
    const employeeTypes = request.query.type;
    let queryString = '';
    if (employeeTypes) {
        if (Array.isArray(employeeTypes)) {
            for (const type of employeeTypes) {
                queryString += `UNION SELECT eid, employment_date, salary, name, res_id, city, street_name, '${type}' as table_name FROM ${type}\n`;
            }
            queryString = queryString.substr(6);
        } else {
            queryString = `SELECT eid, employment_date, salary, name, res_id, city, street_name, '${employeeTypes}' as table_name FROM ${employeeTypes}`;
        }
    } else {
        queryString = `
        SELECT eid, employment_date, salary, name, res_id, city, street_name, 'manager' as table_name FROM manager
        UNION
        SELECT eid, employment_date, salary, name, res_id, city, street_name, 'chef' as table_name FROM chef
        UNION
        SELECT eid, employment_date, salary, name, res_id, city, street_name, 'waiter' as table_name FROM waiter
        `;
    }
    queryString = `${queryString} ORDER BY eid`;
    db.query(queryString)
        .then((res) => {
            // console.log(res);
            response.status(201).send(res.rows);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).send('Error: SELECT query failed').end();
        });
}
