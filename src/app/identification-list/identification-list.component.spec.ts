import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationListComponent } from './identification-list.component';

describe('IdentificationListComponent', () => {
  let component: IdentificationListComponent;
  let fixture: ComponentFixture<IdentificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
