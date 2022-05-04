import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import { checkUserJwt, checkUserPermission } from "../middleware/JWTaction";
const routes = express.Router();

const initApiRoutes = (app) => {

    routes.all("*", checkUserJwt, checkUserPermission,);//mặc định các router sẽ chạy qua 2 cái check quyền này trước rồi mới thực hiện tiếp các tác vụ bên dưới

    routes.post("/register", apiController.handleRegister);
    routes.post("/login", apiController.handleLogin);
    routes.post("/logout", apiController.handleLogout);


    routes.get("/user/read", userController.readFunc);
    routes.post("/user/create", userController.createFunc);
    routes.put("/user/update", userController.updateFunc);
    routes.delete("/user/delete", userController.deleteFunc);
    routes.get("/account", userController.getUserAccount);

    routes.get("/group/read", groupController.readFunc);
    return app.use("/api/v1/", routes);
}
export default initApiRoutes;