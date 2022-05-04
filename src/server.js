import express from 'express';
import initWebRoutes from './routes/web';
import initApiRoutes from './routes/api';
import configViewEngine from './config/viewEngine';
import bodyParser from 'body-parser';
import configCors from './config/cors';
import cookieParser from 'cookie-parser';


const app = express();
// Add headers before the routes are defined
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
configCors(app);// cors cho trang web
//config view engine
configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser()); // thêm cookie đẩy về phía sever

//init web initWebRoutesnpx sequelize-cli init
// initWebRoutes(app);
initApiRoutes(app);
initWebRoutes(app);
app.use((req, res) => {//xử lý khi link vào 1 link bất kì mà không tồn tại
    return res.send("404 not found");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('jwt nodejs and react ' + PORT);
});