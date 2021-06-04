import express from 'express';
import { testDBConnection } from './routes/testDBConnection';

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Express configuration
app.set("port", process.env.PORT || 3001);

app.get('/', (req, res) => {
  res.send('Welcome to Michelin 3 Star Restaurant Project!');
});

app.get('/testDBConnection', (req, res) => {
    testDBConnection(res);
  });

export default app;