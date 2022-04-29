import MedicationRepo from '../repositories/MedicationRepo'

async function isCodeUnique (code) {
    const medicationCount = await MedicationRepo.count({code})

    if (medicationCount = 0) throw new Error("Medication with serial number exist")

    return
}

export default class MedicationService {
    
    static async addMedication(data = {}, transaction) {

        await isCodeUnique(data.code)

        const medication = await MedicationRepo.create(data, transaction)

        return medication
    }

    static async findMedication(conditions = {}, options = {}) {
        return await MedicationRepo.findOne(conditions, options)
    }

    static async findMedication(conditions = {}, options = {}) {
        return await MedicationRepo.findAll(conditions, options)
    }

    static async updateMedication(conditions = {}, data = {}, transaction) {
        return await MedicationRepo.update(conditions, {}, data, transaction)
    }
}