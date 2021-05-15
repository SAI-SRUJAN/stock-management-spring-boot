import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormCheckboxComponent } from './order-form-checkbox.component';

describe('OrderFormCheckboxComponent', () => {
  let component: OrderFormCheckboxComponent;
  let fixture: ComponentFixture<OrderFormCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
