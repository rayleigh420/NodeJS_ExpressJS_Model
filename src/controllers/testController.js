import testService from "../services/testService"

const testController = {
    test: async (req, res) => {
        try {
            let result = await testService.getTest("Hello ")

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

module.exports = testController