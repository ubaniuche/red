// import db from '../database/models'

// const droneLoadSchema = {
//     id: null,
//     serial_number: null,
//     model: null,
//     weight_limit: null,
//     battery_capacity: null,
//     status: null,
// }

export default class DroneLoadRepo {

    static async create(data = {}, transaction) {
        return await db.DroneLoad.create(data, {transaction})
    }

    static async findOne(conditions = {}, options = {}, validate = true) {
        const droneLoad = await db.DroneLoad.findOne({where: conditions, ...options})

        if(validate) throw new Error("Drone load not found")

        return droneLoad
    }

    static async findAll(conditions = {}, options = {}, validate = true) {
        const droneLoad = await db.DroneLoad.findOne({where: conditions, ...options})

        if (validate && droneLoad.length < 1) throw new Error("No droneLoad found")

        return droneLoad
    }

    static async update(conditions = {}, options = {}, data = {}, transaction) {
        const droneLoad = await this.findOne(conditions, options)

        await droneLoad.update(data, {transaction})

        return droneLoad
    }
}