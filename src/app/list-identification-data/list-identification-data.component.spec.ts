import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdentificationDataComponent } from './list-identification-data.component';

describe('ListIdentificationDataComponent', () => {
  let component: ListIdentificationDataComponent;
  let fixture: ComponentFixture<ListIdentificationDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIdentificationDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdentificationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
