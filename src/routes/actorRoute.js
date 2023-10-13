import express from "express"
import actorController from "../controllers/actorController";

let router = express.Router();

let initActorRoute = (app) => {
    router.get("/", actorController.getActor)

    return app.use("/actors", router);
};

export default initActorRoute;