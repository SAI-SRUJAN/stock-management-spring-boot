import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockHomeService } from './stock-home/services/stock-home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tab;
  loadingIcon = false;
  username: any;
  isAdmin = false;

  constructor(
    private router: Router,
    private stockService: StockHomeService) {
  }

  ngOnInit() {
    this.tab = 'home';
    this.router.events.subscribe(events => {
      document.querySelectorAll('.tab').forEach(element => {
        element.classList.remove('active');
      });
      const selectedButton = this.router.url.split('/')[1];
      if (selectedButton) {
        document.querySelector('#' + selectedButton + 'Button').classList.add('active');
      } else {
        document.querySelector('#homeButton').classList.add('active');
      }
    });

    this.stockService.loadingIcon$.subscribe(val => {
      this.loadingIcon = val;
    });

    this.getUserName();
  }

  getUserName() {
    this.stockService.getUserName().subscribe(res => {
      this.username = res.split('[')[0];
      const role = res.split('[')[1];
      this.stockService.setUserRole(role.split(']')[0]);
      this.stockService.userName = this.username;
      if (this.stockService.userRole === 'ADMIN'){
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
  }

  signout() {
    window.location.href = 'https://victory-comforts.herokuapp.com/logout';
  }

}
