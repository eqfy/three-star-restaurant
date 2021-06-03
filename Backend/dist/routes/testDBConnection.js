"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDBConnection = void 0;
const db_1 = __importDefault(require("../db"));
function testDBConnection(response) {
    db_1.default.query("SELECT * FROM restaurant", (err, res) => {
        if (err) {
            console.error(err);
            response.status(500).send("Error: SELECT query failed").end();
        }
        response.status(201).send(res.rows);
    });
}
exports.testDBConnection = testDBConnection;
//# sourceMappingURL=testDBConnection.js.map