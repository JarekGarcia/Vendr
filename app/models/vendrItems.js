export class vendrItems {

    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.url = data.url
    }
    get VendrItemsCard() {
        return `
    <div class="col-3 mt-3">
          <img class="img-items"
            src="${this.url}"
            alt="Brussels Sprouts">
          <div class="bg-black text-white fw-bold p-1">
            <p>${this.name}</p>
            <div class="d-flex justify-content-between">
              <p>$${this.price}</p>
              <p onclick="app.VendingController._buyItem('${this.name}')" class="btn btn-success fw-bold">BUY</p>
            </div>
          </div>
        </div>
    `
    }
}
