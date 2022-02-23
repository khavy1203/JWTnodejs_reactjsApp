import express from 'express';
import initWebRoutes from './routes/web';
import configViewEngine from './configs/viewEngine';
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express();

//configs view engine
configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init web initWebRoutes
initWebRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('jwt nodejs and react ' + PORT);
});