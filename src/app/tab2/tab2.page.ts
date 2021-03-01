import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cost: number;
  costingPrice: number;
  sellingPrice: number;
  markupValue : number;
  iva: number;
  check = {
    selected: true
  }
  constructor() {
    this.sellingPrice = 0;
    this.iva = 1.19;
  }

  public priceType(){
    this.check.selected  ? false : true;
  }

  public calculateSellingPrice() {
    this.cost = this.costingPrice;
    if (!this.check.selected) {
      this.cost *= this.iva;
    }
    this.sellingPrice = ((this.markupValue / 100) + 1) * this.cost;
  }

}
