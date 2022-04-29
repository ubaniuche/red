import db from '../database/models'

export default class LoadedItemRepo {
    
    static async create(data = {}, transaction) {
        return await db.LoadedItems.create(data, {transaction})
    }

    static async findOne(conditions = {}, options = {}, validate = true) {
        const item = await db.LoadedItems.findOne({where: conditions, ...options})

        if(validate) throw new Error("Item not found")

        return item
    }

    static async findAll(conditions = {}, options = {}, validate = true) {
        const item = await db.LoadedItems.findOne({where: conditions, ...options})

        if (validate && item.length < 1) throw new Error("No item found")

        return item
    }

    static async count(conditions = {}) {
        return await db.LoadedItems.count({where: conditions})
    }

    static async update(conditions = {}, options = {}, data = {}, transaction) {
        const item = await this.findOne(conditions, options)

        return await item.update(data, {transaction})
    }

    static async updateWithItem(item = {}, data = {}, transaction) {

        return await item.update(data, {transaction})
    }

    static async delete(conditions = {}, transaction) {
        const item = await this.findOne(conditions)

        return await item.destroy({transaction})
    }

    static async deleteMany(conditions = {}, transaction) {
        const items = await this.findAll(conditions)

        return await items.destroy({transaction})
    }
}