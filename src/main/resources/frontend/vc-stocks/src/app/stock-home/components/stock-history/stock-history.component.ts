import { Component, OnInit } from '@angular/core';
import { StockHomeService } from '../../services/stock-home.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

  columnDefs;
  defaultColDef;
  rowData: any;
  rowDataCopy: any;
  gridApi: any;
  gridColumnApi: any;
  bandNames = [];
  bandName;
  context;
  isAdmin = false;

  constructor(
    private stockHomeService: StockHomeService,
    private utilityService: UtilityService
  ) {
    this.columnDefs = [
      {
        field: 'comfortData.name',
        headerName: 'Name',
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
        field: 'comfortData.bandSize',
        headerName: 'Size & Thickness',
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
        field: 'quantity',
        headerName: 'Quantity',
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
        field: 'bandDescription',
        headerName: 'Description',
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
        field: 'dateCreated',
        headerName: 'Date',
        width: 100,
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
          debounceMs: 0,
          caseSensitive: false,
          suppressAndOrCondition: true
        },
        // filter: 'agDateColumnFilter',
        // filterParams: {
        //   browserDatePicker: true,
        //   comparator: function (filterLocalDateAtMidnight, cellValue) {
        //     var dateAsString = cellValue;
        //     var dateParts = dateAsString.split('-');
        //     var cellDate = new Date(
        //       Number(dateParts[0]),
        //       Number(dateParts[1]) - 1,
        //       Number(dateParts[2])
        //     );

        //     if (cellDate < filterLocalDateAtMidnight) {
        //       return -1;
        //     } else if (cellDate > filterLocalDateAtMidnight) {
        //       return 1;
        //     } else {
        //       return 0;
        //     }
        //   },
        // },
        cellRenderer: (data) => {
          return data.value ? (new Date(data.value)).toLocaleDateString('en-IN') : '';
        }
      },
      {
        field: 'invoice',
        headerName: 'Invoice',
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
        field: 'updatedBy',
        headerName: 'Updated By',
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
  }

  ngOnInit() {
    this.stockHomeService.loadingIcon$.next(true);
    this.stockHomeService.getDistinctbands().subscribe(res => {
      this.stockHomeService.loadingIcon$.next(false);
      this.bandNames = res;
    });
    this.stockHomeService.userRole$.subscribe(res => {
      if (res === 'ADMIN') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    })
  }

  searchHistory() {
    this.stockHomeService.loadingIcon$.next(true);
    this.stockHomeService.getHistory().subscribe(res => {
      this.stockHomeService.loadingIcon$.next(false);
      this.rowData = res;
      this.rowDataCopy = JSON.parse(JSON.stringify(res));
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  getBandHistory(value) {
    this.stockHomeService.loadingIcon$.next(true);
    this.stockHomeService.getHistoryByName(value).subscribe(res => {
      this.stockHomeService.loadingIcon$.next(false);
      this.rowData = res;
      this.rowDataCopy = JSON.parse(JSON.stringify(res));
    });
  }

  setHeight() {
    let height = window.innerHeight - document.querySelector('.stocks-table').getBoundingClientRect().top;
    if (height < 350) {
      height = 350;
    }
    return height;
  }

  downloadReport() {
    const url = '/api/download/history';
    this.utilityService.downloadDocument(url, true);
  }
}
