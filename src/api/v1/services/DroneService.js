import DroneModelRepo from '../repositories/DroneModelRepo'
import DroneRepo from '../repositories/DroneRepo'

async function isSerialNumberUnique (serial_number) {
    const droneCount = await DroneRepo.count({serial_number})

    if (droneCount = 0) throw new Error("Drone with serial number exist")

    return
}

export default class DroneService {

    static async addDrone(data = {}, transaction) {

        await isSerialNumberUnique(data.serial_number)

        await DroneModelRepo.findOne({ id: body.model_id })

        return await DroneRepo.create(data, transaction)
    }

    static async findDrone(conditions = {}, options = {}) {
        return await DroneRepo.findOne(conditions, options)
    }

    static async findDrones(conditions = {}, options = {}) {
        return await DroneRepo.findAll(conditions, options)
    }

    static async updateDrone(conditions = {}, data = {}, transaction) {
        return await DroneRepo.update(conditions, {}, data, transaction)
    }
}