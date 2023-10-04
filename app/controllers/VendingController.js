import { AppState } from "../AppState.js";
// import { vendingService } from "../services/VendingService.js";
import { setHTML, setText } from "../utils/Writer.js";
import { vendingService } from "../services/VendingService.js";



function _drawVendrItems() {
    const items = AppState.vendritems
    console.log(items)
    let content = ''
    items.forEach(item => content += item.VendrItemsCard)
    setHTML('drawItems', content)
}








export class VendingController {
    constructor() {
        console.log('Vending Controller is working')
        _drawVendrItems()
    }

    _buyItem(name) {
        vendingService.buyItem()
    }

}