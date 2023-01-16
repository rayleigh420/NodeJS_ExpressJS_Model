import testService from "../services/testService"

const testController = {
    test: async (req, res) => {
        try {
            let result = await testService.test("Say hello ")
            res.send(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = testController