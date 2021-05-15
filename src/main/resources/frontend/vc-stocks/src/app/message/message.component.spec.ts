import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageComponent } from './message.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
    updateSize: jasmine.createSpy('updateSize')
  };
  const data = {
    message : 'Test For Dialog?',
    status : 'Success'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent ],
      imports: [MatDividerModule, MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef},
        { provide: MAT_DIALOG_DATA, useValue: data }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    component.data.status = 'Failure';
    component.data.message = '?Test';
    component.ngOnInit();
    expect(component.isSuccess).toBeFalsy();
  });
  it('#cancelDialog', () => {
    component.cancelDialog();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
  it('#okDialog', () => {
    component.okDialog();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
