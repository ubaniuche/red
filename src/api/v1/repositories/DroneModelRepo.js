import db from '../database/models'

export default class DroneModelRepo {

    static async create(data = {}, transaction) {
        return await db.DroneModels.create(data, {transaction})
    }

    static async createMany(data = [], transaction) {
        return await db.DroneModels.bulkInsert(data, {transaction})
    }
    
    static async count(conditions = {}) {
        return await db.DroneModels.count({where: conditions})
    }

    static async findOne(conditions = {}, options = {}, validate = true) {
        const droneModel = await db.DroneModels.findOne({where: conditions, ...options})

        if(validate) throw new Error("Drone load not found")

        return droneModel
    }

    static async findAll(conditions = {}, options = {}, validate = true) {
        const droneModel = await db.DroneModels.findOne({where: conditions, ...options})

        if (validate && droneModel.length < 1) throw new Error("Drone load not found")

        return droneModel
    }

    static async update(conditions = {}, options = {}, data = {}, transaction) {
        const droneModel = await this.findOne(conditions, options)

        await droneModel.update(data, {transaction})

        return droneModel
    }
}