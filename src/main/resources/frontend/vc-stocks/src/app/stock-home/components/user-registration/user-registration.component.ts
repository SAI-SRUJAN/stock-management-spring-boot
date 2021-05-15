import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { StockHomeService } from '../../services/stock-home.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userName;
  password;
  authority;
  authorities =['ADMIN', 'USER'];

  constructor(
    private stockHomeService: StockHomeService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  enableAdd() {
    if ((this.userName !== undefined && this.userName !== '') &&
      (this.password !== undefined && this.password !== '') &&
      (this.authority !== undefined && this.authority !== '')) {
      return false;
    }
    return true;
  }

  addBand() {
    this.stockHomeService.loadingIcon$.next(true);
    const request = {
      username: this.userName,
      password: this.password,
      authority: this.authority,
    };
    this.stockHomeService.addUser(request).subscribe(res => {
      this.openSnackBar('User Added Successfully');
      this.stockHomeService.loadingIcon$.next(false);
      this.userName = null;
      this.authority = null;
      this.password = null;
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
