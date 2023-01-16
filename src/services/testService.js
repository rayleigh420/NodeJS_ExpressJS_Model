let test = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let str = data + "Le Nhat Duy"
            resolve(str)
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    test
}