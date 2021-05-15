import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormQuantityComponent } from './order-form-quantity.component';

describe('OrderFormQuantityComponent', () => {
  let component: OrderFormQuantityComponent;
  let fixture: ComponentFixture<OrderFormQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
