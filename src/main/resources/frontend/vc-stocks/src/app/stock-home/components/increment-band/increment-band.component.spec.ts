import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementBandComponent } from './increment-band.component';

describe('IncrementBandComponent', () => {
  let component: IncrementBandComponent;
  let fixture: ComponentFixture<IncrementBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
