import DroneModelRepo from "../repositories/DroneModelRepo"

export default class DroneModelService {

    static async addDroneModel(data = {}, transaction) {

        await DroneModelRepo.findOne({ id: body.model_id })

        const drone = await DroneModelRepo.create(data, transaction)

        return drone
    }

    static async findDroneModel(conditions = {}, options = {}) {
        return await DroneModelRepo.findOne(conditions, options)
    }

    static async findDroneModels(conditions = {}, options = {}) {
        return await DroneModelRepo.findAll(conditions, options)
    }

}