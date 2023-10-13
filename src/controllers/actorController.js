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
    },

    createActor: async (req, res) => {
        try {
            console.log(req.body)
            let result = await actorService.createActor(req.body)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    updateActor: async (req, res) => {
        try{
            console.log(req.params.id)
            console.log(req.body)
            let result = await actorService.updateActor({
                actor_id: req.params.id,
                ...req.body
            })
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    }

}


module.exports = actorController