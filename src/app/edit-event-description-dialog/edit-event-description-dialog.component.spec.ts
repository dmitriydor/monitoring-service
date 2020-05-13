import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventDescriptionDialogComponent } from './edit-event-description-dialog.component';

describe('EditEventDescriptionDialogComponent', () => {
  let component: EditEventDescriptionDialogComponent;
  let fixture: ComponentFixture<EditEventDescriptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventDescriptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
