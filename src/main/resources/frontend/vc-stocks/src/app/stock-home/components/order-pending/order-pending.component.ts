import { Component, OnInit } from '@angular/core';
import { StockHomeService } from '../../services/stock-home.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { UtilityService } from '../../services/utility.service';
import { OrderFormCheckboxComponent } from '../order-form-checkbox/order-form-checkbox.component';
import { ComparePipe } from 'src/app/compare-pipe';

@Component({
  selector: 'app-order-pending',
  templateUrl: './order-pending.component.html',
  styleUrls: ['./order-pending.component.css']
})
export class OrderPendingComponent implements OnInit {
  columnDefs = [];
  rowData = [];
  defaultColDef: any;
  context: any;
  gridApi: any;
  gridColumnApi: any;
  selectedRowIndex: any[];
  rowDataCopy: any;

  constructor(
    private stockHomeService: StockHomeService,
    private snackBar: MatSnackBar,
    private utilityService: UtilityService
  ) {
    this.columnDefs = [
      {
        field: 'name',
        width: 100,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          debounceMs: 0,
          caseSensitive: false,
          suppressAndOrCondition: true
        }
      },
      {
        field: 'bandSize',
        width: 100,
        filter: 'agTextColumnFilter',
        headerName: 'Size & Thickness',
        filterParams: {
          filterOptions: ['contains'],
          debounceMs: 0,
          caseSensitive: false,
          suppressAndOrCondition: true
        }
      },
      {
        headerName: 'Date Of Order Placed',
        field: 'dateOrdered',
        width: 100,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          debounceMs: 0,
          caseSensitive: false,
          suppressAndOrCondition: true
        },
        cellRenderer: (data) => {
          return data.value ? (new Date(data.value)).toLocaleDateString('en-GB') : '';
        }
      },
      {
        headerName: 'Quantity of Order Placed',
        field: 'quantityOrdered',
        width: 100,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          debounceMs: 0,
          caseSensitive: false,
          suppressAndOrCondition: true
        }
      }
    ];
    this.defaultColDef = {
      resizable: true,
      sortable: true
    };

    this.context = { componentParent: this };
  }

  ngOnInit() {
    this.searchBand();
  }

  searchBand() {
    this.stockHomeService.getBands().subscribe(res => {
      this.setRowData(res);
    });
  }

  setRowData(data) {
    const stockData = [];
    data.map(band => {
      if (band.quantityOrdered > 0) {
        stockData.push(band);
      }
    });
    this.rowData = stockData;
    this.rowDataCopy = JSON.parse(JSON.stringify(stockData));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  updateData(data) {
    const updateData = [];
    for (let i = 0; i < this.rowData.length; i++) {
      const equal = new ComparePipe().transform(this.rowData[i], this.rowDataCopy[i]);
      if (Object.keys(equal).length > 0) {
        updateData.push(this.rowData[i]);
      }
    }
    this.stockHomeService.updateBandData(updateData).subscribe(res => {
      this.setRowData(res);
      this.openSnackBar('Bands Updated Successfully');
    });
  }

  openSnackBar(message: string, action?: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.duration = 2000;
    config.panelClass = 'vc-snackbar';
    this.snackBar.open(message, action, config);
  }

  unsaveChangesPopUp(url) {
    const equal = new ComparePipe().isdeepCompareable(this.rowData, this.rowDataCopy);
    if (!equal) {
      this.utilityService.openMessageDialog('Please save the changes you have made', 'Failure');
    } else {
      return true;
    }
  }

  setHeight() {
    const height = window.innerHeight - document.querySelector('.order-pending-content').getBoundingClientRect().top;
    return height;
  }

}
