const db = require("../models");
// import Actor from "../models/actor";

let getTest = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.Actor.findAll();
            resolve(result)
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    getTest
}