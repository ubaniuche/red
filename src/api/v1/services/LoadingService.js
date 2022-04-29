import { BadRequestError } from '../helpers/exceptions';
import LoadedItemRepo from '../repositories/LoadedItemRepo'
import MedicationService from './MedicationService';

function sumLoadedItemsWeight(items) {
    let sum = 0

    if (items.length == 0) return sum

    sum = items.reduce((a, b) => {
        return {weight: a.weight + (b.weight * b.quantity)}
    });

    return sum.weight
}

export default class LoadingService {
    static async loadItem(data, transaction) {

        // PSEUDOCODE

        // Get all loaded items
        // Calculate items total weight sum
        // Check if item exist among loaded items
            // If item exist
                // calculate weight of current item using recieved quantity from user and weight.

            // If item does not exist get item from medication db
        // Sum total items and current item weight
            // If weight > 500 return overload error
            // If weight < 500 update or create document

        
        
        
        
        
        
        
        
        
        let item
        let sum = 0

        const medication = await MedicationService.findMedication({id: medication_id})

        // const items = await LoadedItemRepo.findAll({drone_id: data.drone_id}, {}, false)

        // if (items.length == 0) return sum

        // sum = items.reduce((acc, curr) => {
            
        //     if (curr.medication_id == data.medication_id) item = curr

        //     return {weight: acc.weight + (curr.weight * curr.quantity)}
        // });

        // const itemWeight = data.quantity * item.weight

        // if(itemWeight + sum >= 500) throw new BadRequestError("Exceeded maximum weight of 500. Unable to load item")

        // if (item) {
        //     data.quantity = data.quantity + item.quantity

        //     item = await LoadedItemRepo.updateWithItem(item, data, transaction)
        // }
        // else {
        //     item = await LoadedItemRepo.create(data, transaction)
        // }

        // return item
    }

    static async offloadItem(data, transaction) {
        return await LoadedItemRepo.delete({id: data.id}, transaction)
    }

    static async updateItem(data = {}, transaction) {
        const item = await LoadedItemRepo.update({id: data.id}, {}, data, transaction)
    }

    static async offloadAllItems(data, transaction) {
        return await LoadedItemRepo.deleteMany({drone_id: data.drone_id}, transaction)
    }

    static async getDroneLoadWeight(data) {
        const sum = 0

        const items = await LoadedItemRepo.findAll({drone_id: data.drone_id}, {}, false)

        if (items.length == 0) return sum

        sum = items.reduce((a, b) => {
            return {weight: a.weight + b.weight}
        });

        return sum.weight
    }
}