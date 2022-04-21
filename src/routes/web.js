import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";
const routes = express.Router();

const initWebRoutes = (app) => {
    routes.get("/home", homeController.handleHelloWord);
    routes.get("/user", homeController.handleUserPage);
    routes.get("/user/update/:id", homeController.getUpdateUser);

    routes.post("/user/create-user", homeController.handleCreateNewUser);
    routes.post("/user/delete-user/:id", homeController.handleDeleteUser);
    routes.post("/user/update-user", homeController.handleUpdateUser);

    routes.get("/api/test", apiController.test);
    return app.use("/", routes);
}
export default initWebRoutes;