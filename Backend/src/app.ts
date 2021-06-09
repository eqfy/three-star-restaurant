import express from 'express';
import cors from 'cors';
import { testDBConnection } from './routes/testDBConnection';
import { getDishInfoInMenu, getMenus } from './routes/menus';

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// Express configuration
app.set('port', process.env.PORT || 3001);

app.get('/', (req, res) => {
    res.send('Welcome to Michelin 3 Star Restaurant Project!');
});

app.get('/testDBConnection', (req, res) => {
    testDBConnection(res);
});

app.get('/menus', (req, res) => {
    if (req.query.menu_name) {
        getDishInfoInMenu(`${req.query.menu_name}`, res);
    } else {
        getMenus(res);
    }
});

export default app;
