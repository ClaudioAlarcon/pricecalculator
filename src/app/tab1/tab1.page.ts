import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cost: number;
  costingPrice: number;
  sellingPrice: number;
  markupValue : number;
  iva: number;
  check = {
    selected: true
  }
  constructor() {
    this.markupValue = 0;
    this.iva = 1.19;
  }

  public priceType(){
    this.check.selected  ? false : true;
  }

  public calculateMarkup(){
    this.cost = this.costingPrice;
    if (!this.check.selected) {
      this.cost *= this.iva;
    }
    this.markupValue = (this.sellingPrice - this.cost)/this.cost;
  }
  
}
