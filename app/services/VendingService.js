import { AppState } from "../AppState.js";
import { vendrItems } from "../models/vendrItems.js";


const items = AppState.vendritems



class VendingService {

    buyItem() {
        items.find(item => {
            if (AppState.money >= item.price) {
                AppState.money -= item.price
            }

            console.log('clicked buy', item.name)

        })

    }


}

export const vendingService = new VendingService()

