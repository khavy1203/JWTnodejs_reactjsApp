import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";

const routes = express.Router();

const initApiRoutes = (app) => {
    routes.get("/test-api", apiController.test);
    routes.post("/register", apiController.handleRegister);
    routes.post("/login", apiController.handleLogin);


    routes.get("/user/read", userController.readFunc);
    routes.post("/user/create", userController.createFunc);
    routes.put("/user/update", userController.updateFunc);
    routes.delete("/user/delete", userController.deleteFunc);

    routes.get("/group/read", groupController.readFunc);
    return app.use("/api/v1/", routes);
}
export default initApiRoutes;