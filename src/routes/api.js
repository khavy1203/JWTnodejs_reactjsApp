import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import roleController from "../controller/roleController";
import { checkUserJwt, checkUserPermission } from "../middleware/JWTaction";
const routes = express.Router();

const initApiRoutes = (app) => {

    routes.all("*", checkUserJwt, checkUserPermission,);//mặc định các router sẽ chạy qua 2 cái check quyền này trước rồi mới thực hiện tiếp các tác vụ bên dưới

    routes.post("/register", apiController.handleRegister);
    routes.post("/login", apiController.handleLogin);
    routes.post("/logout", apiController.handleLogout);

    //user router
    routes.get("/user/read", userController.readFunc);
    routes.post("/user/create", userController.createFunc);
    routes.put("/user/update", userController.updateFunc);
    routes.delete("/user/delete", userController.deleteFunc);
    routes.get("/account", userController.getUserAccount);

    //role router
    routes.post("/role/create", roleController.createFunc);
    routes.get("/role/read", roleController.readFunc);
    routes.delete("/role/delete", roleController.deleteFunc);
    routes.get("/role/by-group/:groupId", roleController.getRoleByGroup);
    routes.post("/role/assign-to-group", roleController.assignRoleToGroup);

    routes.get("/group/read", groupController.readFunc);
    return app.use("/api/v1/", routes);
}
export default initApiRoutes;