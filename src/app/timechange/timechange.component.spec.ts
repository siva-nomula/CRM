import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimechangeComponent } from './timechange.component';

describe('TimechangeComponent', () => {
  let component: TimechangeComponent;
  let fixture: ComponentFixture<TimechangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimechangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
