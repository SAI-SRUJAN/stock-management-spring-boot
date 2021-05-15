import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockHomeComponent } from './stock-home/components/stock-home.component';
import { StockHomeService } from './stock-home/services/stock-home.service';
import { HttpClientModule } from '@angular/common/http';
import { AddBandComponent } from './stock-home/components/add-band/add-band.component';
import { AgGridModule } from 'ag-grid-angular';
import { IncrementBandComponent } from './stock-home/components/increment-band/increment-band.component';
import { DecrementBandComponent } from './stock-home/components/decrement-band/decrement-band.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OrderFormComponent } from './stock-home/components/order-form/order-form.component';
import { OrderFormCheckboxComponent } from './stock-home/components/order-form-checkbox/order-form-checkbox.component';
import { StockHistoryComponent } from './stock-home/components/stock-history/stock-history.component';
import { UtilityService } from './stock-home/services/utility.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';
import { MatDividerModule } from '@angular/material/divider';
import { ComparePipe } from './compare-pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { InvoicePopUpComponent } from './stock-home/components/invoice-pop-up/invoice-pop-up.component';
import { OrderPendingComponent } from './stock-home/components/order-pending/order-pending.component';
import { OrderFormQuantityComponent } from './stock-home/components/order-form-quantity/order-form-quantity.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserRegistrationComponent } from './stock-home/components/user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    StockHomeComponent,
    AddBandComponent,
    IncrementBandComponent,
    DecrementBandComponent,
    OrderFormComponent,
    OrderFormCheckboxComponent,
    StockHistoryComponent,
    MessageComponent,
    ComparePipe,
    InvoicePopUpComponent,
    OrderPendingComponent,
    OrderFormQuantityComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [StockHomeService, UtilityService],
  entryComponents: [IncrementBandComponent, OrderFormQuantityComponent, DecrementBandComponent, OrderFormCheckboxComponent, MessageComponent, InvoicePopUpComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
