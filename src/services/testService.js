let getTest = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve({
                id: Math.random(),
                name: data + "Le Nhat Duy"
            })
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    getTest
}