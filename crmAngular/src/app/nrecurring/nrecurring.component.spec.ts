import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrecurringComponent } from './nrecurring.component';

describe('NrecurringComponent', () => {
  let component: NrecurringComponent;
  let fixture: ComponentFixture<NrecurringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrecurringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrecurringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
