import { FailureResponse, SuccessResponse } from '../helpers/ServerResponse'
import MedicationService from '../services/MedicationService'
import BaseController from './BaseController'

export default class MedicationController extends BaseController {
    static async addMedication (req, res) {
        const transaction = await this.getTransaction()

        try {
            const medication = await MedicationService.addMedication(req.body, transaction)

            await transaction.commit()

            return SuccessResponse(req, res, 201, medication, "Medication added successfully")
        }
        catch (error) {
            return FailureResponse(req, res, error, transaction)
        }
    }

    static async getMedication (req, res) {
        try{

            const medication = await MedicationService.findMedication({id: req.params.medication_id}, {})

            return SuccessResponse(req, res, 201, medication, "Medication found")

        }
        catch (error) {
            return FailureResponse(req, res, error)
        }
    }

    static async getMedications (req, res) {
        try{

            const medications = await MedicationService.findMedications()

            return SuccessResponse(req, res, 201, medications, "Medications found")

        }
        catch (error) {
            return FailureResponse(req, res, error)
        }
    }

    static async updateMedication (req, res) {
        const transaction = await this.getTransaction()

        try {
            const medication = await MedicationService.updateMedication({id: req.params.medication_id}, req.body, transaction)

            await transaction.commit()

            return SuccessResponse(req, res, 201, medication, "Medication updated successfully")
        }
        catch (error) {
            return FailureResponse(req, res, error, transaction)
        }
    }
}