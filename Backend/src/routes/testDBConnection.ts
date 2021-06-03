import db from "../db";

export function testDBConnection(response: any): void {
    db.query("SELECT * FROM restaurant", (err, res) => {
        if(err) { 
            console.error(err);
            response.status(500).send("Error: SELECT query failed").end();
        }
        response.status(201).send(res.rows);
    });
}