import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementBandComponent } from './decrement-band.component';

describe('DecrementBandComponent', () => {
  let component: DecrementBandComponent;
  let fixture: ComponentFixture<DecrementBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecrementBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecrementBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
