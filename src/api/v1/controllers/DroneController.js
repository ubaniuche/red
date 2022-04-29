import { FailureResponse, SuccessResponse } from '../helpers/ServerResponse'
import DroneService from '../services/DroneService'
import BaseController from './BaseController'

export default class DroneController extends BaseController {
    static async addDrone (req, res) {
        const transaction = await this.getTransaction()

        try {
            const drone = await DroneService.addDrone(req.body, transaction)

            await transaction.commit()

            return SuccessResponse(req, res, 201, drone, "Drone added successfully")
        }
        catch (error) {
            return FailureResponse(req, res, error, transaction)
        }
    }

    static async getDrone (req, res) {
        try{

            const drone = await DroneService.findDrone({id: req.params.drone_id}, {})

            return SuccessResponse(req, res, 201, drone, "Drone found")

        }
        catch (error) {
            return FailureResponse(req, res, error)
        }
    }

    static async getDrones (req, res) {
        try{

            const drones = await DroneService.findDrones()

            return SuccessResponse(req, res, 201, drones, "Drones found")

        }
        catch (error) {
            return FailureResponse(req, res, error)
        }
    }

    static async updateDrone (req, res) {
        const transaction = await this.getTransaction()

        try {
            const drone = await DroneService.updateDrone({id: req.params.drone_id}, req.body, transaction)

            await transaction.commit()

            return SuccessResponse(req, res, 201, drone, "Drone updated successfully")
        }
        catch (error) {
            return FailureResponse(req, res, error, transaction)
        }
    }
}