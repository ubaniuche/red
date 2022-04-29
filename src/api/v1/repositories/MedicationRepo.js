import db from '../database/models'

export default class MedicationRepo {
    
    static async create(data = {}, transaction) {
        return await db.Medications.create(data, {transaction})
    }

    static async findOne(conditions = {}, options = {}, validate = true) {
        const medication = await db.Medications.findOne({where: conditions, ...options})

        if(validate) throw new Error("Medication not found")

        return medication
    }

    static async findAll(conditions = {}, options = {}, validate = true) {
        const medication = await db.Medications.findOne({where: conditions, ...options})

        if (validate && medication.length < 1) throw new Error("No medication found")

        return medication
    }

    static async count(conditions = {}) {
        return await db.Medications.count({where: conditions})
    }

    static async update(conditions = {}, options = {}, data = {}, transaction) {
        const medication = await this.findOne(conditions, options)

        await medication.update(data, {transaction})

        return medication
    }
}