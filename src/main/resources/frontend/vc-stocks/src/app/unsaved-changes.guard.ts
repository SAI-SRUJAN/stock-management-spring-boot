import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UnsavedChangesGuard<T> implements CanDeactivate<T> {
  currentComponent: any;

  constructor() {

  }

  canDeactivate(component: T,
                next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.currentComponent = component;
    return this.currentComponent.unsaveChangesPopUp(nextState.url);
  }
}
