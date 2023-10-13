import express from "express"
import actorController from "../controllers/actorController";

let router = express.Router();

let initActorRoute = (app) => {
    router.get("/", actorController.getActor)
    router.post("/", actorController.createActor)
    router.put("/:id", actorController.updateActor)

    return app.use("/actors", router);
};

export default initActorRoute;