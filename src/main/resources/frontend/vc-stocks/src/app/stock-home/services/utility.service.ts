import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MessageComponent } from 'src/app/message/message.component';

@Injectable()
export class UtilityService {
  dialogRef: MatDialogRef<MessageComponent>;
  dialogConfig: MatDialogConfig;
  public e2eData;
  constructor(private dialog: MatDialog) {
  }

  isDefined(input) {
    return !(input === undefined || input === null);
  }

  isUndefined(input) {
    return (input === undefined || input === null);
  }

  isArrayDefined(input) {
    return (this.isDefined(input) && input.length > 0);
  }

  openMessageDialog(message, isSuccess, headerLabel?, okButtonLabel?, cancelButtonLabel?, isConfirmationPopup?): MatDialogRef<any> {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.id = '1';
    this.dialogConfig.disableClose = true;
    this.dialogConfig.data = {
      'message': message,
      'status': isSuccess,
      'headerLabel': headerLabel,
      'okButtonLabel': okButtonLabel,
      'cancelButtonLabel': cancelButtonLabel,
      'isConfirmationPopup': isConfirmationPopup,
    };
    return this.dialog.open(MessageComponent, this.dialogConfig);
  }

  downloadDocument(url: string, newTab: boolean) {

    // need to call esb service for downloading csv data
    const newDiv = document.createElement('div');
    newDiv.id = 'formParent';
    newDiv.style.display = 'none';
    document.querySelector('body').appendChild(newDiv);
    const newForm = document.createElement('form');
    newForm.method = 'GET';
    if (newTab) {
      newForm.target = '_blank';
    }
    newForm.action = url;

    const newInput = document.createElement('input');
    newInput.type = 'textarea';
    newInput.id = 'inputData';
    newInput.name = 'inputData';

    const newBtn = document.createElement('button');
    newBtn.id = 'dwnBtn';
    newBtn.type = 'submit';

    newForm.appendChild(newInput);
    newForm.appendChild(newBtn);

    newDiv.appendChild(newForm);
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      newBtn.click();
      newDiv.remove();
    }, 0);
  }

}
