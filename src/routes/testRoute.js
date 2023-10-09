import express from "express"
import testController from "../controllers/testController";

let router = express.Router();

let initTestRoute = (app) => {
    router.get("/", testController.test)

    return app.use("/test", router);
};

export default initTestRoute;