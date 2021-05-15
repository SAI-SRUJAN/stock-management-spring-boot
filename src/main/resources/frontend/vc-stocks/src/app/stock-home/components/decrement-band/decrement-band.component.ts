import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-decrement-band',
  templateUrl: './decrement-band.component.html',
  styleUrls: ['./decrement-band.component.css']
})
export class DecrementBandComponent implements ICellRendererAngularComp, AfterViewInit {

  params: any;
  data;
  decrementCount;

  constructor() { }

  agInit(params: any): void {
    this.data = params.data;
    this.params = params;
  }

  ngAfterViewInit() {
    const input = document.getElementById('decrement-input');
    input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.decrementBand();
      }
    });
  }

  refresh(params: any): boolean {
    return true;
  }

  decrementBand() {
    this.data.sold = this.data.sold + parseInt(this.decrementCount, 10);
    this.data.quantity = this.data.purchased - this.data.sold - this.data.wastage;
    this.data.soldBands = this.data.sold / this.data.rollSize;
    this.data.quantityBands = this.data.quantity / this.data.rollSize;
    const quantity = Math.floor((this.data.quantityBands - Math.floor(this.data.quantityBands)) * this.data.rollSize);
    if (quantity <= 10) {
      this.data.wastage = this.data.wastage + quantity;
      this.data.quantity = this.data.purchased - this.data.sold - this.data.wastage;
      this.data.quantityBands = this.data.quantity / this.data.rollSize;
    }
    this.params.api.refreshView();
  }

  disable() {
    if (this.decrementCount !== undefined && this.decrementCount !== '') {
      return false;
    }
    return true;
  }

}
