import express from "express";
const routes = express.Router();
const initWebRoutes = (app) => {
    routes.get("/", (req, res) => {
        return res.send("Hello word")
    })
    return app.use("/", routes)
}
export default initWebRoutes;