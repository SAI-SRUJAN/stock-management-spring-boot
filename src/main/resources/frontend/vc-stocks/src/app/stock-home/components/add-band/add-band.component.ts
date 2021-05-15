import { Component, OnInit } from '@angular/core';
import { StockHomeService } from '../../services/stock-home.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.css']
})
export class AddBandComponent implements OnInit {

  bandName;
  bandSize;
  bandPurchasedQuantity;
  bandLimit;
  rollSize;
  bandType;
  bandPurchasedQuantityFifty;

  constructor(
    private stockHomeService: StockHomeService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  enableAdd() {
    if ((this.bandName !== undefined && this.bandName !== '') &&
      (this.bandPurchasedQuantity !== undefined && this.bandPurchasedQuantity !== '') &&
      (this.bandSize !== undefined && this.bandSize !== '') &&
      (this.bandLimit !== undefined && this.bandLimit !== '') &&
      (this.rollSize !== undefined && this.rollSize !== '') &&
      (this.bandType !== undefined && this.bandType !== '')) {
      return false;
    }
    return true;
  }

  addBand() {
    this.stockHomeService.loadingIcon$.next(true);
    const request = {
      name: this.bandName,
      quantity: this.bandPurchasedQuantity,
      bandSize: this.bandSize,
      purchased: this.bandPurchasedQuantity,
      sold: 0,
      bandLimit: this.bandLimit,
      rollSize: this.rollSize,
      bandType: this.bandType,
      wastage: 0,
      ordered: false,
      dateOrdered: null,
      purchasedBands: this.bandPurchasedQuantity / this.rollSize + this.bandPurchasedQuantityFifty / 50,
      quantityBands: this.bandPurchasedQuantity / this.rollSize + this.bandPurchasedQuantityFifty / 50,
      soldBands: 0
    };
    this.stockHomeService.addBand(request).subscribe(res => {
      this.openSnackBar('Band Added Successfully');
      this.stockHomeService.loadingIcon$.next(false);
      this.bandName = null;
      this.bandPurchasedQuantity = null;
      this.bandSize = null;
      this.bandLimit = null;
      this.rollSize = null;
      this.bandType = null;
      this.bandPurchasedQuantityFifty = null;
    });
  }

  openSnackBar(message: string, action?: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.duration = 2000;
    config.panelClass = 'vc-snackbar';
    this.snackBar.open(message, action, config);
  }

}
