import initActorRoute from "./actorRoute";
import initTestRoute from "./testRoute";

let initRoutes = (app) => {
    initTestRoute(app)
    initActorRoute(app)
};

export default initRoutes;