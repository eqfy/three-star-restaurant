import express from 'express';
import { testDBConnection } from './routes/testDBConnection';
import { getDishInfoInMenu, getMenus } from './routes/menus';
import { getDishInfo } from './routes/dishinfo';
import { getDishInfoIngredients, getIngredients } from './routes/ingredients';

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
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

app.get('/dishinfo', (req, res) => {
    getDishInfo(res);
});

app.get('/ingredients', (req, res) => {
    if (req.query.dish_info_name) {
        getDishInfoIngredients(res, `${req.query.dish_info_name}`);
    } else {
        getIngredients(res);
    }
});

export default app;
