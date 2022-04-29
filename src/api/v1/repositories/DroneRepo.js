// import db from '../database/models'

export default class DroneRepo {

    static async create(data = {}, transaction) {
        return await db.Drones.create(data, {transaction})
    }

    static async findOne(conditions = {}, options = {}, validate = true) {
        const drone = await db.Drones.findOne({where: conditions, ...options})

        if(validate) throw new Error("Drone not found")

        return drone
    }

    static async findAll(conditions = {}, options = {}, validate = true) {
        const drone = await db.Drones.findOne({where: conditions, ...options})

        if (validate && drone.length < 1) throw new Error("No drone found")

        return drone
    }

    static async count(conditions = {}) {
        return await db.Drones.count({where: conditions})
    }

    static async update(conditions = {}, options = {}, data = {}, transaction) {
        const drone = await this.findOne(conditions, options)

        await drone.update(data, {transaction})

        return drone
    }
}