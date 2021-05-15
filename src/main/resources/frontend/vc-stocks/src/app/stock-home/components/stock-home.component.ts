import { Component, OnInit } from '@angular/core';
import { StockHomeService } from '../services/stock-home.service';
import { IncrementBandComponent } from './increment-band/increment-band.component';
import { DecrementBandComponent } from './decrement-band/decrement-band.component';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { ComparePipe } from '../../compare-pipe';
import { UtilityService } from '../services/utility.service';
import { MatDialog } from '@angular/material/dialog';
import { InvoicePopUpComponent } from './invoice-pop-up/invoice-pop-up.component';
import { equal } from 'assert';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  bandName;
  bandNames = [];
  bandId;
  bandIds = ['1', '2'];
  enableSearch = true;
  bandData = [];
  showUpdate = false;
  columnDefs = [];
  rowData = [];
  rowDataCopy = [];
  defaultColDef;
  gridApi: any;
  gridColumnApi: any;
  context: any;
  rowClassRules = {};
  isAdmin = false;

  constructor(
    private stockHomeService: StockHomeService,
    private snackBar: MatSnackBar,
    private utilityService: UtilityService,
    private dialog: MatDialog) {
    this.columnDefs = [
      {
        field: 'name',
        width: 100,
        headerName: 'Code Number',
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
        headerName: 'Size & Thickness',
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          debounceMs: 0,
          caseSensitive: false,
          suppressAndOrCondition: true
        }
      },
      {
        field: 'purchased',
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
        field: 'increment',
        width: 125,
        headerName: '303/152',
        cellRendererFramework: IncrementBandComponent,
      },
      {
        field: 'purchasedBands',
        headerName: 'Purchased(Rolls)',
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
        field: 'sold',
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
        headerName: '',
        field: 'decrement',
        width: 50,
        cellRendererFramework: DecrementBandComponent,
      },
      {
        field: 'soldBands',
        headerName: 'Sold(Rolls)',
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
        headerName: 'Remaining Quantity',
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
        field: 'quantityBands',
        headerName: 'Quantity(Rolls)',
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
        headerName: 'Wastage',
        field: 'wastage',
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

    this.rowClassRules = {
      'low-band-warning'(params) {
        const lowBands = params.data.quantity;
        return lowBands < params.data.bandLimit;
      }
    };
  }

  ngOnInit() {
    this.searchBand();
    this.stockHomeService.userRole$.subscribe(res => {
      if (res === 'ADMIN') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });

  }

  searchBand() {
    this.stockHomeService.loadingIcon$.next(true);
    this.stockHomeService.getBands().subscribe(res => {
      this.stockHomeService.loadingIcon$.next(false);
      this.rowData = res;
      this.rowDataCopy = JSON.parse(JSON.stringify(res));
    });
  }

  updatePopUp() {
    const dialog = this.dialog.open(InvoicePopUpComponent, {
      width: '500px',
      panelClass: 'invoicePopUp',
      data: this.stockHomeService.userName
    });
    dialog.afterClosed().subscribe(val => {
      if (val) {
        this.updateData(val);
      }
    });
  }

  updateData(data) {
    this.stockHomeService.loadingIcon$.next(true);
    const updateData = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.rowData.length; i++) {
      const equal = new ComparePipe().transform(this.rowData[i], this.rowDataCopy[i]);
      if (Object.keys(equal).length > 0) {
        updateData.push(this.rowData[i]);
      }
    }
    const req = {
      bands: updateData,
      invoice: data,
      userName: this.stockHomeService.userName
    };
    this.stockHomeService.updateBandData(req).subscribe(res => {
      this.stockHomeService.loadingIcon$.next(false);
      this.rowData = res;
      this.rowDataCopy = JSON.parse(JSON.stringify(res));
      this.openSnackBar('Bands Updated Successfully');
    });
  }

  undo(){
    this.rowData = JSON.parse(JSON.stringify(this.rowDataCopy));
  }

  openSnackBar(message: string, action?: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.duration = 2000;
    config.panelClass = 'vc-snackbar';
    this.snackBar.open(message, action, config);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }


  unsaveChangesPopUp(url) {
    const equal = this.isDataChanged();
    if (!equal) {
      this.utilityService.openMessageDialog('The changes which are done are not yet saved. Please click on the update button to save them', 'Failure');
    } else {
      return true;
    }
  }

  isDataChanged() {
    return new ComparePipe().isdeepCompareable(this.rowData, this.rowDataCopy);
  }

  downloadReport() {
    const url = '/api/download/stock';
    this.utilityService.downloadDocument(url, true);
  }

  setHeight() {
    const height = window.innerHeight - document.querySelector('.stocks-table').getBoundingClientRect().top - 50;
    return height;
  }
}
