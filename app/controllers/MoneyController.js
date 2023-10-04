import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";

export class MoneyController {
    constructor() {
        console.log('Money Controller is working')
    }

    addMoney() {
        console.log('added Money');
        moneyService.addMoney()


    }
}


function _drawMoney() {
    setText('moneyCount', AppState.money)
}

AppState.on('money', _drawMoney)