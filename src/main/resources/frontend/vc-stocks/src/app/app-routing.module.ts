import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockHomeComponent } from './stock-home/components/stock-home.component';
import { AddBandComponent } from './stock-home/components/add-band/add-band.component';
import { OrderFormComponent } from './stock-home/components/order-form/order-form.component';
import { StockHistoryComponent } from './stock-home/components/stock-history/stock-history.component';
import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { OrderPendingComponent } from './stock-home/components/order-pending/order-pending.component';
import { UserRegistrationComponent } from './stock-home/components/user-registration/user-registration.component';

export const appRoutes: Routes = [
  { path: '', component: StockHomeComponent, canDeactivate: ['canDeactivateHomeComponent'] },
  { path: 'home', component: StockHomeComponent, canDeactivate: ['canDeactivateHomeComponent'] },
  { path: 'add', component: AddBandComponent },
  { path: 'orderForm', component: OrderFormComponent, canDeactivate: ['canDeactivateOrderComponent'] },
  { path: 'history', component: StockHistoryComponent },
  { path: 'userRegistration', component: UserRegistrationComponent },
  { path: 'orderPending', component: OrderPendingComponent, canDeactivate: ['canDeactivateOrderPendingComponent'] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  providers: [
    { provide: 'canDeactivateHomeComponent', useFactory: () => new UnsavedChangesGuard<StockHomeComponent>() },
    { provide: 'canDeactivateOrderComponent', useFactory: () => new UnsavedChangesGuard<OrderFormComponent>() },
    { provide: 'canDeactivateOrderPendingComponent', useFactory: () => new UnsavedChangesGuard<OrderPendingComponent>() }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
