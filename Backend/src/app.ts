import express from 'express';
import cors from 'cors';
import { testDBConnection } from './routes/testDBConnection';
import { getDishInfoInMenu, getMenus } from './routes/menus';
import { getEmployee } from './routes/employees';
import { getDishInfo, getDishInfoOrderCount } from './routes/dishinfo';
import { getDishInfoIngredients, getIngredients } from './routes/ingredients';
import { getOrderDishOrderItemCount, getTotalDishOrderItemCount } from './routes/dishOrderItems';
import { deleteOrder, projectOrders, getOrders, updateOrder, getOrderCount, addOrder } from './routes/orders';

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // accept CORS for local development

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

app.get('/dishinfoordercount', (req, res) => {
    getDishInfoOrderCount(res);
});

app.get('/ingredients', (req, res) => {
    if (req.query.dish_info_name) {
        getDishInfoIngredients(res, `${req.query.dish_info_name}`);
    } else {
        getIngredients(res);
    }
});

app.get('/dishorderitemcount', (req, res) => {
    getOrderDishOrderItemCount(res);
});

app.get('/dishorderitemtotalcount', (req, res) => {
    getTotalDishOrderItemCount(res);
});

app.get('/employee', (req, res) => {
    getEmployee(req, res);
});

app.get('/orders', (req, res) => {
    getOrders(req, res);
});
app.post('/addorder', (req, res) => {
    addOrder(req, res);
});
app.get('/deleteorder', (req, res) => {
    deleteOrder(req, res);
});

app.post('/updateorder', (req, res) => {
    updateOrder(req, res);
});

app.post('/projectorders', (req, res) => {
    projectOrders(req, res);
});

app.get('/ordercount', (req, res) => {
    getOrderCount(req, res);
});

export default app;
