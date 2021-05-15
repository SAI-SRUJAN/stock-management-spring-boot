import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-order-form-quantity',
  templateUrl: './order-form-quantity.component.html',
  styleUrls: ['./order-form-quantity.component.css']
})
export class OrderFormQuantityComponent implements ICellRendererAngularComp {

  params: any;
  data;
  pendingQuantity;
  
  constructor() { }

  agInit(params: any): void {
    this.data = params.data;
    this.params = params;
    this.pendingQuantity = this.data.quantityOrdered;
  }

  refresh(params: any): boolean {
    return true;
  }

  updateData(){
    if (this.pendingQuantity > 0) {
    this.data.quantityOrdered = this.pendingQuantity;
    } else {
      this.data.quantityOrdered = 0;
    }
  }
}
