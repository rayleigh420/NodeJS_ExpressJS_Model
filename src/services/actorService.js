const db = require("../models");
// import Actor from "../models/actor";

let getActor = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.Actor.findAll();
            resolve(result)
        } catch (e) {
            console.log(e)
        }
    })
}

let createActor = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const actor = await db.Actor.create({
                first_name: data.first_name,
                last_name: data.last_name,
                last_update: new Date()
            })

            resolve(actor)
        } catch(e){
            console.log(e)
        }
    })
}

let updateActor = async (data) => {
    console.log("Data: ", data)
    return new Promise(async (resolve, reject) => {
        try {
            const actor = await db.Actor.update({
                first_name: data.first_name,
                last_name: data.last_name,
                last_update: new Date()
            }, {
                where: {
                    actor_id: data.actor_id
                }
            })

            resolve(actor)
        } catch(e){
            console.log(e)
        }
    })
}

module.exports = {
    getActor, createActor, updateActor
}