// import testService from "../services/testService"
import actorService from "../services/actorService"

const actorController = {
    getActor: async (req, res) => {
        try {
            let result = await actorService.getActor()

            res.json({
                status: 200,
                message: "Get test data sucesss!",
                data: {...result}
            })
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = actorController