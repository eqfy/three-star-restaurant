"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testDBConnection_1 = require("./routes/testDBConnection");
const app = express_1.default();
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Express configuration
app.set("port", process.env.PORT || 3001);
app.get('/', (req, res) => {
    res.send('Welcome to Michelin 3 Star Restaurant Project!');
});
app.get('/testDBConnection', (req, res) => {
    testDBConnection_1.testDBConnection(res);
});
exports.default = app;
//# sourceMappingURL=app.js.map