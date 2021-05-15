import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePopUpComponent } from './invoice-pop-up.component';

describe('InvoicePopUpComponent', () => {
  let component: InvoicePopUpComponent;
  let fixture: ComponentFixture<InvoicePopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
