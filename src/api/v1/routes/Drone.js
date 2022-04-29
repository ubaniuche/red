import express from 'express'
import DroneController from '../controllers/DroneController'

const route = express.Router()

route.post('/', DroneController.addDrone)

route.get('/:drone_id', DroneController.getDrone)

route.get('/', DroneController.getDrones)

route.patch('/', DroneController.updateDrone)

export default route