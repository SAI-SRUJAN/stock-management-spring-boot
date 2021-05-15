import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-order-form-checkbox',
  templateUrl: './order-form-checkbox.component.html',
  styleUrls: ['./order-form-checkbox.component.css']
})
export class OrderFormCheckboxComponent implements ICellRendererAngularComp {

  params: any;
  data;
  constructor() { }

  agInit(params: any): void {
    this.data = params.data;
    this.params = params;
  }

  refresh(params: any): boolean {
    return true;
  }

  selectedValue(event) {
    if (event.target.checked === true) {
      this.data.ordered = 'true';
      this.data.dateOrdered = new Date();
    } else {
      this.data.ordered = 'false';
      this.data.dateOrdered = null;
    }
    this.params.api.refreshView();
  }

  isChecked() {
    if (this.data.ordered === 'true' || this.data.ordered === true) {
      return true;
    } else {
      return false;
    }
  }
}
