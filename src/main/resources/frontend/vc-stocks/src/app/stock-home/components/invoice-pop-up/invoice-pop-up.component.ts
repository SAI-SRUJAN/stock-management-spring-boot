import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-pop-up',
  templateUrl: './invoice-pop-up.component.html',
  styleUrls: ['./invoice-pop-up.component.css']
})
export class InvoicePopUpComponent implements OnInit {

  invoiceNo;

  constructor(
    public dialogRef: MatDialogRef<InvoicePopUpComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  update() {
    this.dialogRef.close(this.invoiceNo);
  }

  close(){
    this.dialogRef.close();
  }

}
