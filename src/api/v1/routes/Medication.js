import express from 'express'
import MedicationController from '../controllers/MedicationController'

const route = express.Router()

route.post('/', MedicationController.addMedication)

route.get('/:medication_id', MedicationController.getMedication)

route.get('/', MedicationController.getMedications)

route.patch('/', MedicationController.updateMedication)

export default route