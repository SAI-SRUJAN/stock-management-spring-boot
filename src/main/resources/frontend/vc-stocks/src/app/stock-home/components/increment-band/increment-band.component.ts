import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-increment-band',
  templateUrl: './increment-band.component.html',
  styleUrls: ['./increment-band.component.css']
})
export class IncrementBandComponent implements ICellRendererAngularComp, AfterViewInit {

  params: any;
  data;
  incrementCount;
  input = document.getElementById('increment-input');
  bandChecked = false;
  initialCount;

  constructor() {
  }

  ngAfterViewInit() {
    const input = document.getElementById('increment-input');
    input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.incrementBand();
      }
    });
  }

  agInit(params: any): void {
    this.data = params.data;
    this.params = params;
  }

  refresh(params: any): boolean {
    return true;
  }

  disable() {
    if (this.incrementCount !== undefined && this.incrementCount !== '') {
      return false;
    }
    return true;
  }

  incrementBand() {
    this.data.purchased = this.data.purchased + parseInt(this.incrementCount, 10);
    this.data.quantity = this.data.purchased - this.data.sold - this.data.wastage;
    if (this.bandChecked) {
      this.data.purchasedBands = this.data.purchasedBands + parseInt(this.incrementCount, 10) / 50;
      this.data.quantityBands = this.data.quantityBands + parseInt(this.incrementCount, 10) / 50;
    } else {
      this.data.purchasedBands = this.data.purchasedBands + parseInt(this.incrementCount, 10) / this.data.rollSize;
      this.data.quantityBands = this.data.quantityBands + parseInt(this.incrementCount, 10) / this.data.rollSize;
    }
    if (this.data.quantity > this.data.bandLimit) {
      this.data.ordered = false;
    }
    if (this.data.quantityOrdered > 0 && this.data.quantityOrdered >= this.incrementCount) {
      this.data.quantityOrdered = this.data.quantityOrdered - this.incrementCount;
      if (this.data.quantityOrdered === 0) {
        this.data.dateOrdered = null;
      }
    }
    if (this.data)
      this.params.api.refreshView();
  }

  setBandSize(value) {
    this.bandChecked = value.checked;
  }
}
