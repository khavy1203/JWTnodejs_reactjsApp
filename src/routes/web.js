import express from "express";
import homeController from "../controller/homeController"
const routes = express.Router();

const initWebRoutes = (app) => {
    routes.get("/home", homeController.handleHelloWord);
    routes.get("/user", homeController.handleUserPage);
    routes.post("/user/create-user", homeController.handleCreateNewUser);
    return app.use("/", routes);
}
export default initWebRoutes;