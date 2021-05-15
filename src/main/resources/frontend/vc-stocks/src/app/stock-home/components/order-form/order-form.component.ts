import { Component, OnInit } from '@angular/core';
import { StockHomeService } from '../../services/stock-home.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ComparePipe } from '../../../compare-pipe';
import { OrderFormCheckboxComponent } from '../order-form-checkbox/order-form-checkbox.component';
import { UtilityService } from '../../services/utility.service';
import { OrderFormQuantityComponent } from '../order-form-quantity/order-form-quantity.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
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
        headerName: '',
        field: 'ordered',
        width: 50,
        cellRendererFramework: OrderFormCheckboxComponent,
      },
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
        headerName: 'Remaining Balance',
        field: 'quantity',
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
        },
        cellRendererFramework: OrderFormQuantityComponent
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
      if (band.ordered === 'true') {
        band.ordered = true;
      }
      if (band.quantity < band.bandLimit) {
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
    const req = {
      bands: updateData,
      invoice: null,
      userName: this.stockHomeService.userName
    };
    this.stockHomeService.updateBandData(req).subscribe(res => {
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
    const equal = this.isDataChanged();
    if (!equal) {
      this.utilityService.openMessageDialog('The changes which are done are not yet saved. Please click on the update button to save them', 'Failure');
    } else {
      return true;
    }
  }

  isDataChanged(){
    return new ComparePipe().isdeepCompareable(this.rowData, this.rowDataCopy);
  }

  setHeight(){
    const height =  window.innerHeight - document.querySelector('.order-form-content').getBoundingClientRect().top - 50;
    return height;
  }

}
