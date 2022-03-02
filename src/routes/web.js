import express from "express";
import homeController from "../controller/homeController"
const routes = express.Router();

const initWebRoutes = (app) => {
    routes.get("/home", homeController.handleHelloWord);
    routes.get("/user", homeController.handleUserPage);
    routes.get("/user/update/:id", homeController.getUpdateUser);

    routes.post("/user/create-user", homeController.handleCreateNewUser);
    routes.post("/user/delete-user/:id", homeController.handleDeleteUser);
    routes.post("/user/update-user", homeController.handleUpdateUser);

    return app.use("/", routes);
}
export default initWebRoutes;