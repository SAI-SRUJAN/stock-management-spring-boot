import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'am-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  labels;
  datatoBeShowninPopUp: any; // variable holds data to be shown in the dialog box
  isDataString = false; // check if data is string or not
  isConfirmationPopUp = false;
  isSuccess;
  headerLabel;
  okButtonLabel;
  cancelButtonLabel;

  constructor(
    public dialogRef: MatDialogRef<MessageComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.headerLabel = (this.data.headerLabel !== undefined) ? this.data.headerLabel : 'Victory Comforts';
    this.okButtonLabel = (this.data.okButtonLabel !== undefined) ? this.data.okButtonLabel : 'Yes';
    this.cancelButtonLabel = (this.data.cancelButtonLabel !== undefined) ? this.data.cancelButtonLabel : 'No';

    if (typeof this.data.message === 'string') {
      this.isDataString = true;
      if (this.data.status !== undefined) {
        this.isSuccess = (this.data.status === 'Success') ? true : false;
      }
      if (this.data.message.includes('?') || this.data.isConfirmationPopup) {
        this.isDataString = false;
        this.isConfirmationPopUp = true;
      }
    }
    this.dialogRef.updateSize('500px');
    this.datatoBeShowninPopUp = this.data.message.replace(/^"?(.+?)"?$/, '$1');
    // this.popUpHeader = this.commentsService.commentsConfigData['config']['popUpHeader'];
  }

  cancelDialog() {
    this.dialogRef.close('Cancel');
  }

  okDialog() {
    this.dialogRef.close('OK');
  }
}
