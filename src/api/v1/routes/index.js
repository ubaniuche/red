import express from 'express'
import Drone from './Drone'
import Medication from './Medication'

const route = express.Router()

route.use('/drones', Drone)

// route.use('/drones', Drone)

export default route